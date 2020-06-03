import { BinaryWriter } from './lib/BinaryWriter';
import { IDecoder } from './IDecoder';
import { getHashCode } from './lib/hash';
import { isNullOrWhiteSpace } from './lib/string';

export enum OrderConditionType {
  Price = 1,
  Time = 3,
  Margin = 4,
  Execution = 5,
  Volume = 6,
  PercentChange = 7
}

export abstract class OrderCondition {
  Type: OrderConditionType = OrderConditionType.Price;
  IsConjunctionConnection = false;

  public static Create(type: OrderConditionType): OrderCondition {
    let rval: OrderCondition | null = null;

    switch (type) {
      case OrderConditionType.Execution:
        rval = new ExecutionCondition();
        break;

      case OrderConditionType.Margin:
        rval = new MarginCondition();
        break;

      case OrderConditionType.PercentChange:
        rval = new PercentChangeCondition();
        break;

      case OrderConditionType.Price:
        rval = new PriceCondition();
        break;

      case OrderConditionType.Time:
        rval = new TimeCondition();
        break;

      case OrderConditionType.Volume:
        rval = new VolumeCondition();
        break;
    }

    if (rval != null) rval.Type = type;

    return rval;
  }

  Serialize(outStream: BinaryWriter) {
    outStream.AddParameter(this.IsConjunctionConnection ? 'a' : 'o');
  }

  Deserialize(inStream: IDecoder) {
    this.IsConjunctionConnection = inStream.ReadString() == 'a';
  }

  TryParse(cond: string) {
    this.IsConjunctionConnection = cond == ' and';

    return this.IsConjunctionConnection || cond == ' or';
  }

  public static Parse(cond: string): OrderCondition | undefined {
    var conditions = Object.values(OrderConditionType)
      .filter(v => typeof v === 'number')
      .map(t => OrderCondition.Create(t as OrderConditionType));

    return conditions.find(c => c.TryParse(cond));
  }

  Equals(other: OrderCondition) {
    if (other == null) return false;

    return this.IsConjunctionConnection == other.IsConjunctionConnection && this.Type == other.Type;
  }

  GetHashCode() {
    return getHashCode(this.IsConjunctionConnection, this.Type);
  }
}

export class StringSuffixParser {
  str = '';

  constructor(str: string) {
    this.str = str;
  }

  SkipSuffix(prefix: string) {
    return this.str.substring(this.str.indexOf(prefix) + prefix.length);
  }

  GetNextSuffixedValue(prefix: string) {
    var rval = this.str.substring(0, this.str.indexOf(prefix));
    this.str = this.SkipSuffix(prefix);

    return rval;
  }

  Rest = '';
}

//-------------------------
//-- OperatorCondition.ts
//-------------------------

export abstract class OperatorCondition extends OrderCondition {
  abstract Value = '';
  IsMore = false;

  header = ' is ';

  ToString() {
    return this.header + (this.IsMore ? '>= ' : '<= ') + this.Value;
  }

  Equals(other: OperatorCondition) {
    if (other == null) return false;

    return super.Equals(other) && this.Value === other.Value && this.IsMore == other.IsMore;
  }

  GetHashCode() {
    return getHashCode(super.GetHashCode(), this.Value, this.IsMore);
  }

  TryParse(cond: string) {
    if (!cond.startsWith(this.header)) return false;

    try {
      cond = cond.replace(this.header, '');

      if (!cond.startsWith('>=') && !cond.startsWith('<=')) return false;

      this.IsMore = cond.startsWith('>=');

      if (super.TryParse(cond.substring(cond.lastIndexOf(' '))))
        cond = cond.substring(0, cond.lastIndexOf(' '));

      this.Value = cond.substring(3);
    } catch {
      return false;
    }

    return true;
  }

  Deserialize(inStream: IDecoder) {
    super.Deserialize(inStream);

    this.IsMore = inStream.ReadBoolFromInt();
    this.Value = inStream.ReadString();
  }

  Serialize(outStream: BinaryWriter) {
    super.Serialize(outStream);
    outStream.AddParameter(this.IsMore);
    outStream.AddParameter(this.Value);
  }
}

//-------------------------
//-- ContractCondition.ts
//-------------------------

export abstract class ContractCondition extends OperatorCondition {
  ConId = 0;
  Exchange = '';

  delimiter = ' of ';

  ContractResolver = (conid: number, exch: string) => conid + '(' + exch + ')';

  ToString() {
    return (
      this.Type +
      this.delimiter +
      this.ContractResolver(this.ConId, this.Exchange) +
      super.ToString()
    );
  }

  Equals(other: ContractCondition) {
    if (other == null) return false;

    return super.Equals(other) && this.ConId === other.ConId && this.Exchange === other.Exchange;
  }

  GetHashCode() {
    return getHashCode(super.GetHashCode(), this.ConId, this.Exchange);
  }

  TryParse(cond: string) {
    try {
      if (cond.substring(0, cond.indexOf(this.delimiter)) != OrderConditionType[this.Type])
        return false;

      cond = cond.substring(cond.indexOf(this.delimiter) + this.delimiter.length);
      let conid = 0;

      if ((conid = Number(cond.substring(0, cond.indexOf('(')))) === NaN) return false;

      this.ConId = conid;
      cond = cond.substring(cond.indexOf('(') + 1);
      this.Exchange = cond.substring(0, cond.indexOf(')'));
      cond = cond.substring(cond.indexOf(')') + 1);

      return super.TryParse(cond);
    } catch {
      return false;
    }
  }

  Deserialize(inStream: IDecoder) {
    super.Deserialize(inStream);

    this.ConId = inStream.ReadInt();
    this.Exchange = inStream.ReadString();
  }

  Serialize(outStream: BinaryWriter) {
    super.Serialize(outStream);
    outStream.AddParameter(this.ConId);
    outStream.AddParameter(this.Exchange);
  }
}
//----------------------
//-- VolumeCondition.ts
//----------------------

/**
 * @brief Used with conditional orders to submit or cancel an order based on a specified volume change in a security.
 */
export class VolumeCondition extends ContractCondition {
  Volume = 0;

  get Value() {
    return String(this.Volume);
  }

  set Value(val: string) {
    this.Volume = Number(val);
  }
}
//-------------------------------
//-- PriceCondition.cs
//-------------------------------

enum TriggerMethod {
  Default = 0,
  DoubleBidAsk,
  Last,
  DoubleLast,
  BidAsk,
  LastOfBidAsk = 7,
  MidPoint
}

class CTriggerMethod {
  static readonly friendlyNames = [
    'default',
    'double bid/ask',
    'last',
    'double last',
    'bid/ask',
    '',
    '',
    'last of bid/ask',
    'mid-point'
  ];

  static ToFriendlyString(th: TriggerMethod) {
    return CTriggerMethod.friendlyNames[th];
  }

  static FromFriendlyString(friendlyName: string) {
    return CTriggerMethod.friendlyNames.indexOf(friendlyName) as TriggerMethod;
  }
}

/**
 *  @brief Used with conditional orders to cancel or submit order based on price of an instrument.
 */

export class PriceCondition extends ContractCondition {
  get Value() {
    return String(this.Price);
  }
  set Value(val: string) {
    this.Price = Number(val);
  }

  ToString() {
    return CTriggerMethod.ToFriendlyString(this.TriggerMethod) + ' ' + super.ToString();
  }

  Equals(other: PriceCondition) {
    if (other == null) return false;

    return super.Equals(other) && this.TriggerMethod == other.TriggerMethod;
  }

  GetHashCode() {
    return getHashCode(super.GetHashCode(), this.TriggerMethod);
  }

  Price = 0;
  TriggerMethod: TriggerMethod = TriggerMethod.Default;

  Deserialize(inStream: IDecoder) {
    super.Deserialize(inStream);

    this.TriggerMethod = inStream.ReadInt();
  }

  Serialize(outStream: BinaryWriter) {
    super.Serialize(outStream);
    outStream.AddParameter(this.TriggerMethod);
  }

  TryParse(cond: string) {
    const arr = CTriggerMethod.friendlyNames
      .filter(n => cond.startsWith(n))
      .sort((a, b) => {
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        return 0;
      });
    const fName = arr.length ? arr[0] : null;

    if (fName == null) return false;

    try {
      this.TriggerMethod = CTriggerMethod.FromFriendlyString(fName);
      cond = cond.substring(cond.indexOf(fName) + fName.length + 1);

      return super.TryParse(cond);
    } catch {
      return false;
    }
  }
}

//-----------------------
//-- TimeCondition.ts
//-----------------------

/**
 * @brief Time condition used in conditional orders to submit or cancel orders at specified time.
 */
export class TimeCondition extends OperatorCondition {
  header = 'time';

  get Value() {
    return this.Time;
  }
  set Value(val: string) {
    this.Time = val;
  }

  ToString() {
    return this.header + super.ToString();
  }

  /**
   * @brief Time field used in conditional order logic. Valid format: YYYYMMDD HH:MM:SS
   */

  Time = '';

  TryParse(cond: string) {
    if (!cond.startsWith(this.header)) return false;

    cond = cond.replace(this.header, '');
    return super.TryParse(cond);
  }
}

//----------------------
//-- MarginCondition.ts
//----------------------

/**
 * @class MarginCondition
 * @brief This class represents a condition requiring the margin cushion reaching a given percent to be fulfilled.
 * Orders can be activated or canceled if a set of given conditions is met. A MarginCondition is met whenever the margin penetrates the given percent.
 */
export class MarginCondition extends OperatorCondition {
  header = 'the margin cushion percent';

  get Value() {
    return String(this.Percent);
  }
  set Value(val: string) {
    this.Percent = Number(val);
  }

  ToString() {
    return this.header + super.ToString();
  }

  /**
   * @brief Margin percent to trigger condition.
   */
  Percent = 0;

  TryParse(cond: string) {
    if (!cond.startsWith(this.header)) return false;

    cond = cond.replace(this.header, '');

    return super.TryParse(cond);
  }
}

//-------------------------
//-- ExecutionCondition.ts
//-------------------------

/**
 * @class ExecutionCondition
 * @brief This class represents a condition requiring a specific execution event to be fulfilled.
 * Orders can be activated or canceled if a set of given conditions is met. An ExecutionCondition is met whenever a trade occurs on a certain product at the given exchange.
 */
export class ExecutionCondition extends OrderCondition {
  /**
   * @brief Exchange where the symbol needs to be traded.
   */
  Exchange = '';

  /**
   * @brief Kind of instrument being monitored.
   */
  SecType = '';

  /**
   * @brief Instrument's symbol
   */
  Symbol = '';

  header = 'trade occurs for ';
  symbolSuffix = ' symbol on ';
  exchangeSuffix = ' exchange for ';
  secTypeSuffix = ' security type';
  ToString() {
    return (
      this.header +
      this.Symbol +
      this.symbolSuffix +
      this.Exchange +
      this.exchangeSuffix +
      this.SecType +
      this.secTypeSuffix
    );
  }

  TryParse(cond: string) {
    if (!cond.startsWith(this.header)) return false;

    try {
      var parser = new StringSuffixParser(cond.replace(this.header, ''));

      this.Symbol = parser.GetNextSuffixedValue(this.symbolSuffix);
      this.Exchange = parser.GetNextSuffixedValue(this.exchangeSuffix);
      this.SecType = parser.GetNextSuffixedValue(this.secTypeSuffix);

      if (!isNullOrWhiteSpace(parser.Rest)) return super.TryParse(parser.Rest);
    } catch {
      return false;
    }

    return true;
  }

  Deserialize(inStream: IDecoder) {
    super.Deserialize(inStream);

    this.SecType = inStream.ReadString();
    this.Exchange = inStream.ReadString();
    this.Symbol = inStream.ReadString();
  }

  Serialize(outStream: BinaryWriter) {
    super.Serialize(outStream);

    outStream.AddParameter(this.SecType);
    outStream.AddParameter(this.Exchange);
    outStream.AddParameter(this.Symbol);
  }

  Equals(other: ExecutionCondition) {
    if (other == null) return false;

    return (
      super.Equals(other) &&
      this.Exchange === other.Exchange &&
      this.SecType === other.SecType &&
      this.Symbol === other.Symbol
    );
  }

  GetHashCode() {
    return super.GetHashCode() + getHashCode(this.Exchange, this.SecType, this.Symbol);
  }
}

//------------------------------
//-- PercentChangeCondition.ts
//------------------------------

/**
 * @brief Used with conditional orders to place or submit an order based on a percentage change of an instrument to the last close price.
 */
export class PercentChangeCondition extends ContractCondition {
  get Value() {
    return String(this.ChangePercent);
  }
  set Value(val: string) {
    //PORT NOTE: parseFloat in js will ignore everything after comma, c# does parsing a bit differently, it just removes comma.
    // I'm too lazy to implement the same behaviour, but I use Number() because it will produce NaN and let us detect an issue.
    this.ChangePercent = Number(val);
  }

  ChangePercent = 0;
}
