import { ExecutionFilter } from './ExecutionFilter';

test('ExecutionFilter::constructor', () => {
  const f = new ExecutionFilter();
  expect(f.AcctCode).toBe('');
  expect(f.ClientId).toBe(0);
  expect(f.Exchange).toBe('');
  expect(f.SecType).toBe('');
  expect(f.Side).toBe('');
  expect(f.Symbol).toBe('');
  expect(f.Time).toBe('');
});

test('ExecutionFilter::getHashCode', () => {
  const f = new ExecutionFilter(4, 'asdf', 'gggg', 'ee', 'wewe', 'ewe', 'wewe');
  const hash = f.GetHashCode();
  expect(hash).toBe(f.GetHashCode());
  expect(hash).toBe('5b0e19fd1f10b55bb99858f4b8e81547d0d7813c01f051290663a8b52fd30c9b');

  const f2 = new ExecutionFilter(4, 'asdf', 'gggg', 'ee', 'wewe', 'ewe', 'wewe');
  const hash2 = f2.GetHashCode();
  expect(hash).toBe(hash2);
  expect(f2).not.toBe(f);
});

test('ExecutionFilter::Equals', () => {
  const f = new ExecutionFilter(4, 'acccode', 'gggg', 'ee', 'wewe', 'ewe', 'wewe');
  const f2 = new ExecutionFilter(4, 'acccode', 'gggg', 'ee', 'wewe', 'ewe', 'wewe');
  expect(f).not.toBe(f2);
  expect(f.Equals()).toBe(false);
  expect(f.Equals(f2)).toBe(true);
  expect(f.Equals(f)).toBe(true);
  f2.AcctCode = '333';
  expect(f.Equals(f2)).toBe(false);
  f2.AcctCode = 'acccode';
  expect(f.Equals(f2)).toBe(true);
});
