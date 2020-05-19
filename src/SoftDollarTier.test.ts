import { SoftDollarTier } from './SoftDollarTier';

test('SoftDollarTier::constructor', () => {
  const f = new SoftDollarTier();
  expect(f.DisplayName).toBe('');
  expect(f.Name).toBe('');
  expect(f.Value).toBe('');
});

test('SoftDollarTier::getHashCode', () => {
  const f = new SoftDollarTier('a', 'b', 'c');
  const hash = f.GetHashCode();
  expect(hash).toBe(f.GetHashCode());
  expect(hash).toBe('c0da72ecd1600b74f9f0e73de49db1cc2418e1d5388202d12ff529222dffa664');

  const f2 = new SoftDollarTier('a', 'b', 'c');
  const hash2 = f2.GetHashCode();
  expect(hash).toBe(hash2);
  expect(f2).not.toBe(f);
});

test('SoftDollarTier::Equals', () => {
  const f = new SoftDollarTier('a', 'b', 'c');
  const f2 = new SoftDollarTier('a', 'b', 'c');
  expect(f).not.toBe(f2);
  expect(f.Equals()).toBe(false);
  expect(f.Equals(f2)).toBe(true);
  expect(f.Equals(f)).toBe(true);
  f2.Name = '333';
  expect(f.Equals(f2)).toBe(false);
  f2.Name = 'a';
  expect(f.Equals(f2)).toBe(true);

  f2.DisplayName = 'asdf';
  expect(f.Equals(f2)).toBe(true);

  expect(f.DisplayName).toBe(f.toString());
  expect(f.DisplayName).toBe(f.ToString());
});
