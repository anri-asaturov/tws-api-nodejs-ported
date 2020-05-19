import { HistoricalTick } from './HistoricalTick';

test('FamilyCode::constructor', () => {
  let f = new HistoricalTick();
  expect(f.Time).toBe(0);
  expect(f.Price).toBe(0);
  expect(f.Size).toBe(0);

  f = new HistoricalTick(123, 456, 789);
  expect(f.Time).toBe(123);
  expect(f.Price).toBe(456);
  expect(f.Size).toBe(789);
});
