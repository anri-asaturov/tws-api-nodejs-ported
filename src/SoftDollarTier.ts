import { compareStrings } from './lib/string';
import { getHashCode } from './lib/hash';

/**
 * @brief A container for storing Soft Dollar Tier information
 */
export class SoftDollarTier {
  public constructor(public Name = '', public Value = '', public DisplayName = '') {}

  Equals(obj?: SoftDollarTier) {
    if (obj == null) return false;
    if (obj === this) return true;

    return (
      compareStrings(this.Name, obj.Name, true) == 0 &&
      compareStrings(this.Value, obj.Value, true) == 0
    );
  }

  GetHashCode() {
    return getHashCode('SoftDollarTier', this.Name, this.Value);
  }

  ToString() {
    return this.DisplayName;
  }
  toString() {
    return this.DisplayName;
  }
}
