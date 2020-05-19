import { PriceIncrement } from './PriceIncrement';

test('PriceIncrement::constructor', () => {
  let f = new PriceIncrement();
  expect(f.Increment).toBe(0);
  expect(f.LowEdge).toBe(0);

  f = new PriceIncrement(1.2, 34);
  expect(f.LowEdge).toBe(1.2);
  expect(f.Increment).toBe(34);
});
