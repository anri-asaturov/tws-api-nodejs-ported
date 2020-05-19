import { FamilyCode } from './FamilyCode';

test('FamilyCode::constructor', () => {
  let f = new FamilyCode();
  expect(f.AccountID).toBe('');
  expect(f.FamilyCodeStr).toBe('');

  f = new FamilyCode('abc', 'def');
  expect(f.AccountID).toBe('abc');
  expect(f.FamilyCodeStr).toBe('def');
});
