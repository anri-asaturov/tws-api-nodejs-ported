import { ScannerSubscription } from './ScannerSubscription';

test('ScannerSubscription', () => {
  const s = new ScannerSubscription();
  expect(s.instrument).toBe('');
});
