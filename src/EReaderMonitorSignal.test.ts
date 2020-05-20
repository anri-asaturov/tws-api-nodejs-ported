import { EReaderMonitorSignal } from './EReaderMonitorSignal';

test('EReaderMonitorSignal', async () => {
  const s = new EReaderMonitorSignal();
  s.issueSignal();
  expect(s.queue.length).toBe(0);
  s.waitForSignal();
  expect(s.queue.length).toBe(1);
  s.issueSignal();
  expect(s.queue.length).toBe(0);

  setTimeout(() => s.issueSignal(), 5);
  s.waitForSignal();
  s.waitForSignal();
  expect(s.queue.length).toBe(2);
  await s.waitForSignal();
  expect(s.queue.length).toBe(0);
});
