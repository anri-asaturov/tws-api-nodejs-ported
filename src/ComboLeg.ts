import { getHashCode } from './lib/hash';

/**
 * @brief Class representing a leg within combo orders.
 * @sa Order
 */
export class ComboLeg {
  public static SAME = 0;
  public static OPEN = 1;
  public static CLOSE = 2;
  public static UNKNOWN = 3;

  constructor(
    public ConId = 0,
    public Ratio = 0,
    public Action = '',
    public Exchange = '',
    public OpenClose = 0,
    public ShortSaleSlot = 0,
    public DesignatedLocation = 0,
    public ExemptCode = 0
  ) {}

  GetHashCode() {
    return getHashCode(
      this.ConId,
      this.Ratio,
      this.Action,
      this.Exchange,
      this.OpenClose,
      this.ShortSaleSlot,
      this.DesignatedLocation,
      this.ExemptCode
    );
  }
}
