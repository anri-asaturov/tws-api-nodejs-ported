import { OrderComboLeg } from './OrderComboLeg';

test('OrderComboLeg::constructor', () => {
  const f = new OrderComboLeg();
  expect(f.Price).toBe(Number.MAX_VALUE);
});

test('OrderComboLeg::getHashCode', () => {
  const f = new OrderComboLeg(1.24);
  const hash = f.GetHashCode();
  expect(hash).toBe(f.GetHashCode());
  expect(hash).toBe('2157711b600db85d8c9fd114b003bc3f395ddd7f0c66f30d55768aa437218a37');

  const f2 = new OrderComboLeg(1.24);
  const hash2 = f2.GetHashCode();
  expect(hash).toBe(hash2);
  expect(f2).not.toBe(f);
});

test('OrderComboLeg::Equals', () => {
  const f = new OrderComboLeg(2.999);
  const f2 = new OrderComboLeg(2.999);
  expect(f).not.toBe(f2);
  expect(f.Equals()).toBe(false);
  expect(f.Equals(f2)).toBe(true);
  expect(f.Equals(f)).toBe(true);
  f2.Price = 5.6;
  expect(f.Equals(f2)).toBe(false);
  f2.Price = 2.999;
  expect(f.Equals(f2)).toBe(true);
});
