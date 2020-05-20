import { TagValue } from './TagValue';

test('TagValue::constructor', () => {
  const f = new TagValue();
  expect(f.Tag).toBe('');
  expect(f.Value).toBe('');
});

test('TagValue::getHashCode', () => {
  const f = new TagValue('a', 'b');
  const hash = f.GetHashCode();
  expect(hash).toBe(f.GetHashCode());
  expect(hash).toBe('0497c57880567f7203151f505d72f33934dffb2854f37a872d451ec2a746342a');

  const f2 = new TagValue('a', 'b');
  const hash2 = f2.GetHashCode();
  expect(hash).toBe(hash2);
  expect(f2).not.toBe(f);
});

test('TagValue::Equals', () => {
  const f = new TagValue('a', 'b');
  const f2 = new TagValue('a', 'b');
  expect(f).not.toBe(f2);
  expect(f.Equals()).toBe(false);
  expect(f.Equals(f2)).toBe(true);
  expect(f.Equals(f)).toBe(true);
  f2.Tag = '333';
  expect(f.Equals(f2)).toBe(false);
  f2.Tag = 'a';
  expect(f.Equals(f2)).toBe(true);
});
