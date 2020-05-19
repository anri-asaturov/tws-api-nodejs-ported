import { IncomingMessage } from './IncomingMessage';

test('IncomingMessage', () => {
  const m = new IncomingMessage();
  expect(m.TickPrice).toBe(1);
});
