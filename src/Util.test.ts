import { StringIsEmpty, TagValueListToString, VectorEqualsUnordered } from './Util';
import { TagValueList } from './lib/List';
import { TagValue } from './TagValue';

test('StringIsEmpty', () => {
  expect(StringIsEmpty(undefined)).toBe(true);
  expect(StringIsEmpty(null)).toBe(true);
  expect(StringIsEmpty('')).toBe(true);
  expect(StringIsEmpty('a')).toBe(false);
  expect(StringIsEmpty('asfdasfasf')).toBe(false);
});

test('TagValueListToString', () => {
  expect(TagValueListToString(null)).toBe('');
  expect(TagValueListToString()).toBe('');
  const list = new TagValueList();
  expect(TagValueListToString(list)).toBe('');
  list.push(new TagValue('abc', 'def'));
  expect(TagValueListToString(list)).toBe('abc=def;');
  list.push(new TagValue('aaa', 'bbb'));
  expect(TagValueListToString(list)).toBe('abc=def;aaa=bbb;');
});

test('VectorEqualsUnordered', () => {
  const v1 = new TagValueList();
  v1.push(new TagValue('a', 'b'));
  v1.push(new TagValue('b', 'c'));
  const v2 = new TagValueList();
  v2.push(new TagValue('b', 'c'));
  v2.push(new TagValue('a', 'b'));

  expect(VectorEqualsUnordered(v1, v1)).toBe(true);
  expect(VectorEqualsUnordered(v1, v2)).toBe(true);
  expect(VectorEqualsUnordered(null, v2)).toBe(false);
  expect(VectorEqualsUnordered(v1, null)).toBe(false);
  expect(VectorEqualsUnordered(null, null)).toBe(true);
  expect(VectorEqualsUnordered(null, undefined)).toBe(true);
  expect(VectorEqualsUnordered(undefined, null)).toBe(true);
  expect(VectorEqualsUnordered(null, new TagValueList())).toBe(true);
  expect(VectorEqualsUnordered(new TagValueList(), null)).toBe(true);
  expect(VectorEqualsUnordered(new TagValueList(), new TagValueList())).toBe(true);
  v2.push(new TagValue('a', 'b'));
  expect(VectorEqualsUnordered(v1, v2)).toBe(false);
  v1.push(new TagValue('a', 'b'));
  expect(VectorEqualsUnordered(v1, v2)).toBe(true);
  v1.push(new TagValue('y', 'y'));
  v2.push(new TagValue('z', 'z'));
  expect(VectorEqualsUnordered(v1, v2)).toBe(false);
});
