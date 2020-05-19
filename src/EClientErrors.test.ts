import { EClientErrors, CodeMsgPair } from './EClientErrors';

test('EClientErrors', () => {
  expect(EClientErrors.AlreadyConnected.Code).toBe(501);
  expect(EClientErrors.AlreadyConnected.Message).toBe('Already Connected.');

  const pair = new CodeMsgPair();
  expect(pair.Code).toBe(0);
  expect(pair.Message).toBe('');
});
