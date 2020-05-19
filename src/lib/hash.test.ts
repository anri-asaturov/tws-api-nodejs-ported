import { getStringHashCode, getHashCode } from './hash';

const zeroHash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

test('GetHashCode of string', () => {
  expect(getStringHashCode()).toBe(zeroHash);
  expect(getStringHashCode('')).toBe(zeroHash);
  expect(getStringHashCode('Hello')).toBe(
    '185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969'
  );
});

test('GetHashCode of mixed arguments', () => {
  expect(getHashCode('Hello')).toBe(
    '185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969'
  );
  expect(getHashCode(undefined, 0, 0, '')).toBe(
    'f1534392279bddbf9d43dde8701cb5be14b82f76ec6607bf8d6ad557f60f304e'
  );
  expect(getHashCode('')).toBe(zeroHash);
  expect(getHashCode('asdf', 34234, 'grgreg', 'rtert', 555, 0, '')).toBe(
    '4b1452d44a3317372576d776353a33f39641e64b3f0bfe23fd6625a831317247'
  );
});
