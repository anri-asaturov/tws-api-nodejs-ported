import { EMessage } from './EMessage';

test('EMessage::constructor', () => {
  const m1 = new EMessage();
  expect(m1.GetBuf()).toBe(m1.GetBuf());
  expect(m1.GetBuf().length).toBe(0);
  expect(m1.GetBuf() instanceof Uint8Array).toBe(true);

  const arr = new Uint8Array([1, 2, 3]);
  const m2 = new EMessage(arr);
  expect(m2.GetBuf()).toBe(arr);
});
