import { DeltaNeutralContract } from './DeltaNeutralContract';

test('DeltaNeutralContract', () => {
  const c = new DeltaNeutralContract();
  expect(c.ConId).toBe(0);
  expect(c.Delta).toBe(0);
  expect(c.Price).toBe(0);
});
