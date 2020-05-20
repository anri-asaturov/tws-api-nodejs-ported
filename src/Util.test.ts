import { Util } from './Util';
import { TagValueList } from './lib/List';
import { TagValue } from './TagValue';

test('Util.StringIsEmpty', () => {
  expect(Util.StringIsEmpty(undefined)).toBe(true);
  expect(Util.StringIsEmpty(null)).toBe(true);
  expect(Util.StringIsEmpty('')).toBe(true);
  expect(Util.StringIsEmpty('a')).toBe(false);
  expect(Util.StringIsEmpty('asfdasfasf')).toBe(false);
});

test('Util.TagValueListToString', () => {
  expect(Util.TagValueListToString(null)).toBe('');
  expect(Util.TagValueListToString()).toBe('');
  const list = new TagValueList();
  expect(Util.TagValueListToString(list)).toBe('');
  list.push(new TagValue('abc', 'def'));
  expect(Util.TagValueListToString(list)).toBe('abc=def;');
  list.push(new TagValue('aaa', 'bbb'));
  expect(Util.TagValueListToString(list)).toBe('abc=def;aaa=bbb;');
});

test('Util.VectorEqualsUnordered', () => {
  const v1 = new TagValueList();
  v1.push(new TagValue('a', 'b'));
  v1.push(new TagValue('b', 'c'));
  const v2 = new TagValueList();
  v2.push(new TagValue('b', 'c'));
  v2.push(new TagValue('a', 'b'));

  expect(Util.VectorEqualsUnordered(v1, v1)).toBe(true);
  expect(Util.VectorEqualsUnordered(v1, v2)).toBe(true);
  expect(Util.VectorEqualsUnordered(null, v2)).toBe(false);
  expect(Util.VectorEqualsUnordered(v1, null)).toBe(false);
  expect(Util.VectorEqualsUnordered(null, null)).toBe(true);
  expect(Util.VectorEqualsUnordered(null, undefined)).toBe(true);
  expect(Util.VectorEqualsUnordered(undefined, null)).toBe(true);
  expect(Util.VectorEqualsUnordered(null, new TagValueList())).toBe(true);
  expect(Util.VectorEqualsUnordered(new TagValueList(), null)).toBe(true);
  expect(Util.VectorEqualsUnordered(new TagValueList(), new TagValueList())).toBe(true);
  v2.push(new TagValue('a', 'b'));
  expect(Util.VectorEqualsUnordered(v1, v2)).toBe(false);
  v1.push(new TagValue('a', 'b'));
  expect(Util.VectorEqualsUnordered(v1, v2)).toBe(true);
  v1.push(new TagValue('y', 'y'));
  v2.push(new TagValue('z', 'z'));
  expect(Util.VectorEqualsUnordered(v1, v2)).toBe(false);
});
