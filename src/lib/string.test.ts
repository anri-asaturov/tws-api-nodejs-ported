import { compareStrings } from './string';

test('compareStrings', () => {
  expect(compareStrings('abc', 'Abc')).toBe(-1);
  expect(compareStrings('Abc', 'Abc')).toBe(0);
  expect(compareStrings('Abc', 'abc')).toBe(1);

  expect(compareStrings('abc', 'Abc', false)).toBe(-1);
  expect(compareStrings('Abc', 'Abc', false)).toBe(0);
  expect(compareStrings('Abc', 'abc', false)).toBe(1);

  expect(compareStrings('abc', 'Abc', true)).toBe(0);
  expect(compareStrings('abc', 'abc', true)).toBe(0);
  expect(compareStrings('Abc', 'abc', true)).toBe(0);

  expect(compareStrings('Abc', '')).toBe(1);
  expect(compareStrings('Abc', '', true)).toBe(1);
});
