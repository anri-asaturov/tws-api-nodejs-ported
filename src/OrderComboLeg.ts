/**
 * @brief Allows to specify a price on an order's leg
 * @sa Order, ComboLeg
 */

import { getHashCode } from './lib/hash';

export class OrderComboLeg {
  constructor(public Price = Number.MAX_VALUE) {}

  Equals(other?: OrderComboLeg): boolean {
    if (other == null) {
      return false;
    }

    if (this === other) {
      return true;
    }

    // it's ok to compare floats with === here, it's a price (small number) and it's not a result of computation, but comes from socket
    return this.Price === other.Price;
  }

  GetHashCode() {
    return getHashCode('OrderComboLeg', this.Price);
  }
}
