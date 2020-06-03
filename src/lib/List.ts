import { TagValue } from '../TagValue';
import { ComboLeg } from '../ComboLeg';
import { OrderComboLeg } from '../OrderComboLeg';
import { getHashCode } from './hash';

// do not use this directly bcs it's hard to determine instance of generic type when serizlising
export abstract class List<T extends { GetHashCode: () => string }> extends Array<T> {
  get Count() {
    return this.length;
  }

  GetHashCode() {
    const codes = this.map(i => i.GetHashCode());
    return getHashCode(...codes);
  }
}

export class TagValueList extends List<TagValue> {}
export class ComboLegList extends List<ComboLeg> {}
export class OrderComboLegList extends List<OrderComboLeg> {}
export class OrderConditionList extends List<OrderCondition> {}
