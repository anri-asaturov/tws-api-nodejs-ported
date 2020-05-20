import { compareStrings } from './lib/string';
import { getHashCode } from './lib/hash';

/**
 * @brief Convenience class to define key-value pairs
 */
export class TagValue {
  public constructor(public Tag = '', public Value = '') {}

  Equals(other?: TagValue) {
    if (this == other) return true;

    if (other == null) return false;

    if (compareStrings(this.Tag, other.Tag) != 0 || compareStrings(this.Value, other.Value) != 0) {
      return false;
    }

    return true;
  }

  GetHashCode() {
    return getHashCode('TagValue', this.Tag, this.Value);
  }
}
