import { HistogramEntry } from './HistogramEntry';

test('FamilyCode::constructor', () => {
  let f = new HistogramEntry();
  expect(f.Price).toBe(0);
  expect(f.Size).toBe(0);

  f = new HistogramEntry(123, 456);
  expect(f.Price).toBe(123);
  expect(f.Size).toBe(456);
});
