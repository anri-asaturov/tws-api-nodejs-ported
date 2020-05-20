import { HistoricalTickLast } from './HistoricalTickLast';

test('HistoricalTickLast', () => {
  let f = new HistoricalTickLast();
  expect(f.Time).toBe(0);
  expect(f.Price).toBe(0);
  expect(f.Size).toBe(0);
  expect(f.Exchange).toBe('');
  expect(f.SpecialConditions).toBe('');
  expect(f.TickAttribLast).toBeDefined();
});
