import { OrderComboLeg } from './OrderComboLeg';

test('OrderComboLeg::constructor', () => {
  const f = new OrderComboLeg();
  expect(f.Price).toBe(Number.MAX_VALUE);
});

test('OrderComboLeg::getHashCode', () => {
  const f = new OrderComboLeg(1.24);
  const hash = f.GetHashCode();
  expect(hash).toBe(f.GetHashCode());
  expect(hash).toBe('c63c003345e87abc48ff29c2f2c972ebc69ac5e9fd3793b15d39f9f9889f709e');

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
