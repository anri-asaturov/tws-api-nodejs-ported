import { MessageValidator } from './MessageValidator';

test('MessageValidator::constructor', () => {
  let f = new MessageValidator();
  expect(f.ServerVersion).toBe(0);

  f = new MessageValidator(123);
  expect(f.ServerVersion).toBe(123);
});
