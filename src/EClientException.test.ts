import { EClientException } from './EClientException';
import { EClientErrors } from './EClientErrors';

test('EClientException', () => {
  try {
    throw new EClientException(EClientErrors.AlreadyConnected);
  } catch (e) {
    expect(e.Err).toBe(EClientErrors.AlreadyConnected);
    expect(e.message).toBe(EClientErrors.AlreadyConnected.Message);
  }
});
