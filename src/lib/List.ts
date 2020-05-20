import { TagValue } from '../TagValue';
import { ComboLeg } from '../ComboLeg';

// do not use this directly bcs it's hard to determine instance of generic type when serizlising
export abstract class List<T> extends Array<T> {
  get Count() {
    return this.length;
  }
}

export class TagValueList extends List<TagValue> {}
export class ComboLegList extends List<ComboLeg> {}
