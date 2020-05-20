import { List } from './lib/List';
import { ComboLeg } from './ComboLeg';
import { DeltaNeutralContract as DeltaNeutralContractClass } from './DeltaNeutralContract';

/**
 * @brief class describing an instrument's definition
 * @sa ContractDetails
 */
export class Contract {
  ConId = 0;
  Symbol = '';
  SecType = '';
  LastTradeDateOrContractMonth = '';
  Strike = 0;
  Right = '';
  Multiplier = '';
  Exchange = '';
  Currency = '';
  LocalSymbol = '';
  PrimaryExch = '';
  TradingClass = '';
  IncludeExpired = false;
  SecIdType = '';
  SecId = '';
  ComboLegsDescription = '';
  ComboLegs = new List<ComboLeg>();
  DeltaNeutralContract = new DeltaNeutralContractClass();

  ToString() {
    return `${this.SecType} ${this.Symbol} ${this.Currency} ${this.Exchange}`;
  }

  toString() {
    return this.ToString();
  }
}
