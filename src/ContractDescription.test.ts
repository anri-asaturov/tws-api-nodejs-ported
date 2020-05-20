import { ContractDescription } from './ContractDescription';

test('ContractDescription', () => {
  const c = new ContractDescription();
  c.DerivativeSecTypes.push('d1', 'd2');
  c.Contract.SecType = 'a';
  c.Contract.Symbol = 'b';
  c.Contract.Currency = 'c';
  c.Contract.Exchange = 'd';
  expect(c.toString()).toBe('a b c d derivativeSecTypes [d1, d2]');
  expect(c.ToString()).toBe(c.toString());
});
