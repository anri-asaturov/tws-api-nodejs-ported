import { compareStrings } from './lib/string';
import { getHashCode } from './lib/hash';

/**
 * @class Liquidity
 * @sa Execution
 */
export class Liquidity {
  /**
   * @brief The enum of available liquidity flag types.
   * 0 = Unknown, 1 = Added liquidity, 2 = Removed liquidity, 3 = Liquidity routed out
   */

  static readonly Values = new Map<number, string>([
    [0, 'None'],
    [1, 'Added Liquidity'],
    [2, 'Removed Liquidity'],
    [3, 'Liquidity Routed Out']
  ]);

  public Liquidity(p: number) {
    this.Value = Liquidity.Values.has(p) ? p : 0;
  }

  /**
   * @brief The value of the liquidity type.
   */
  Value = 0;

  ToString() {
    return Liquidity.Values.get(this.Value);
  }

  toString() {
    return this.ToString();
  }
}

/**
 * @class Execution
 * @brief Class describing an order's execution.
 * @sa ExecutionFilter, CommissionReport
 */
export class Execution {
  public constructor(
    public OrderId: number = 0,
    public ClientId: number = 0,
    public ExecId: string = '',
    public Time: string = '',
    public AcctNumber: string = '',
    public Exchange: string = '',
    public Side: string = '',
    public Shares: number = 0,
    public Price: number = 0,
    public PermId: number = 0,
    public Liquidation: number = 0,
    public CumQty: number = 0,
    public AvgPrice: number = 0,
    public OrderRef: string = '',
    public EvRule: string = '',
    public EvMultiplier: number = 0,
    public ModelCode: string = '',
    public LastLiquidity: Liquidity = new Liquidity()
  ) {}

  Equals(other?: Execution): boolean {
    if (other == null) {
      return false;
    }
    if (this == other) {
      return true;
    }

    return compareStrings(this.ExecId, other.ExecId, true) == 0;
  }

  GetHashCode() {
    return getHashCode(
      'Execution',
      this.OrderId,
      this.ClientId,
      this.ExecId,
      this.Time,
      this.AcctNumber,
      this.Exchange,
      this.Side,
      this.Shares,
      this.Price,
      this.PermId,
      this.Liquidation,
      this.CumQty,
      this.AvgPrice,
      this.OrderRef,
      this.EvRule,
      this.EvMultiplier,
      this.ModelCode,
      this.LastLiquidity.Value
    );
  }
}
