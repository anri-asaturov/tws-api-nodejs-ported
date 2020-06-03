import { PriceCondition } from './OrderCondition';

test('OrderCondition', () => {
  const o = new PriceCondition();

  expect(o).toBeDefined();
});
