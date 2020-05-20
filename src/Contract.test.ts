import { Contract } from './Contract';

test('Contract', () => {
  const c = new Contract();
  expect(c.ComboLegs).toBeDefined();
  c.SecType = 'a';
  c.Symbol = 'b';
  c.Currency = 'c';
  c.Exchange = 'd';
  expect(c.toString()).toBe('a b c d');
  expect(c.toString()).toBe(c.ToString());
});
