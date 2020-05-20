import { ContractDetails } from './ContractDetails';

test('ContractDetails', () => {
  const c = new ContractDetails();
  expect(c.Contract).toBeDefined();
});
