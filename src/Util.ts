﻿import { List } from './lib/List';
import { TagValue } from './TagValue';

export class Util {
  static StringIsEmpty(str?: string | null) {
    return str == null || str.length == 0;
  }

  static VectorEqualsUnordered<T extends { Equals?: (o: T) => boolean }>(
    lhs: List<T> | null = null,
    rhs: List<T> | null = null
  ): boolean {
    if (lhs === rhs) return true; // includes both nullish case
    if (lhs == null) {
      return rhs?.Count ? false : true;
    }
    if (rhs == null) {
      return lhs?.Count ? false : true;
    }
    let lhsCount = lhs.Count;
    let rhsCount = rhs.Count;

    if (lhsCount != rhsCount) return false;

    if (lhsCount == 0) return true;

    let matchedRhsElems: Array<boolean> = [];

    for (let lhsElem of lhs) {
      let rhsIdx = 0;
      for (; rhsIdx < rhsCount; ++rhsIdx) {
        if (matchedRhsElems[rhsIdx]) {
          continue;
        }
        if (lhsElem.Equals ? lhsElem.Equals(rhs[rhsIdx]) : lhsElem === rhs[rhsIdx]) {
          matchedRhsElems[rhsIdx] = true;
          break;
        }
      }
      if (rhsIdx >= rhsCount) {
        // no matching elem found
        return false;
      }
    }

    return true;
  }

  static TagValueListToString(options?: List<TagValue> | null) {
    if (options == null) return '';
    let tagValuesStr = '';

    for (let i = 0; i < options.Count; i++) {
      let tagValue = options[i];
      tagValuesStr += `${tagValue.Tag}=${tagValue.Value};`;
    }

    return tagValuesStr;
  }
}
