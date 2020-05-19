import { getHashCode } from './lib/hash';
import { compareStrings } from './lib/string';

/**
 * @brief when requesting executions, a filter can be specified to receive only a subset of them
 * @sa Contract, Execution, CommissionReport
 */
export class ExecutionFilter {
  constructor(
    public ClientId = 0,
    public AcctCode = '',
    public Time = '',
    public Symbol = '',
    public SecType = '',
    public Exchange = '',
    public Side = ''
  ) {}

  Equals(other?: ExecutionFilter): boolean {
    let l_bRetVal = false;

    if (other == null) {
      l_bRetVal = false;
    } else if (this === other) {
      l_bRetVal = true;
    } else {
      l_bRetVal =
        this.ClientId == other.ClientId &&
        compareStrings(this.AcctCode, other.AcctCode, true) == 0 &&
        compareStrings(this.Time, other.Time, true) == 0 &&
        compareStrings(this.Symbol, other.Symbol, true) == 0 &&
        compareStrings(this.SecType, other.SecType, true) == 0 &&
        compareStrings(this.Exchange, other.Exchange, true) == 0 &&
        compareStrings(this.Side, other.Side, true) == 0;
    }
    return l_bRetVal;
  }

  GetHashCode() {
    return getHashCode(
      'ExecutionFilter',
      this.ClientId,
      this.AcctCode,
      this.Time,
      this.Symbol,
      this.SecType,
      this.Exchange,
      this.Side
    );
  }
}
