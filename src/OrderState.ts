import { compareStrings } from './lib/string';
import { getHashCode } from './lib/hash';

/**
 * @brief Provides an active order's current state
 * @sa Order
 */
export class OrderState {
  public constructor(
    public Status = '',
    public InitMarginBefore = '',
    public MaintMarginBefore = '',
    public EquityWithLoanBefore = '',
    public InitMarginChange = '',
    public MaintMarginChange = '',
    public EquityWithLoanChange = '',
    public InitMarginAfter = '',
    public MaintMarginAfter = '',
    public EquityWithLoanAfter = '',
    public Commission = 0,
    public MinCommission = 0,
    public MaxCommission = 0,
    public CommissionCurrency = '',
    public WarningText = '',
    public CompletedTime = '',
    public CompletedStatus = ''
  ) {}

  Equals(other?: OrderState) {
    if (this === other) return true;

    if (other == null) return false;

    // data from socket, safe to compare floats
    if (
      this.Commission != other.Commission ||
      this.MinCommission != other.MinCommission ||
      this.MaxCommission != other.MaxCommission
    ) {
      return false;
    }

    if (
      compareStrings(this.Status, other.Status) != 0 ||
      compareStrings(this.InitMarginBefore, other.InitMarginBefore) != 0 ||
      compareStrings(this.MaintMarginBefore, other.MaintMarginBefore) != 0 ||
      compareStrings(this.EquityWithLoanBefore, other.EquityWithLoanBefore) != 0 ||
      compareStrings(this.InitMarginChange, other.InitMarginChange) != 0 ||
      compareStrings(this.MaintMarginChange, other.MaintMarginChange) != 0 ||
      compareStrings(this.EquityWithLoanChange, other.EquityWithLoanChange) != 0 ||
      compareStrings(this.InitMarginAfter, other.InitMarginAfter) != 0 ||
      compareStrings(this.MaintMarginAfter, other.MaintMarginAfter) != 0 ||
      compareStrings(this.EquityWithLoanAfter, other.EquityWithLoanAfter) != 0 ||
      compareStrings(this.CommissionCurrency, other.CommissionCurrency) != 0 ||
      compareStrings(this.CompletedTime, other.CompletedTime) != 0 ||
      compareStrings(this.CompletedStatus, other.CompletedStatus) != 0
    ) {
      return false;
    }

    return true;
  }

  GetHashCode() {
    return getHashCode(
      this.Status,
      this.InitMarginBefore,
      this.MaintMarginBefore,
      this.EquityWithLoanBefore,
      this.InitMarginChange,
      this.MaintMarginChange,
      this.EquityWithLoanChange,
      this.InitMarginAfter,
      this.MaintMarginAfter,
      this.EquityWithLoanAfter,
      this.Commission,
      this.MinCommission,
      this.MaxCommission,
      this.CommissionCurrency,
      this.WarningText,
      this.CompletedTime,
      this.CompletedStatus
    );
  }
}
