import { EClientErrors } from './EClientErrors';

test('EClientErrors', () => {
  expect(EClientErrors.AlreadyConnected.Code).toBe(501);
  expect(EClientErrors.AlreadyConnected.Message).toBe('Already Connected.');
});
