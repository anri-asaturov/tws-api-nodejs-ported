import { HistoricalTickBidAsk } from './HistoricalTickBidAsk';

test('HistoricalTickBidAsk', () => {
  let f = new HistoricalTickBidAsk();
  expect(f.Time).toBe(0);
  expect(f.PriceAsk).toBe(0);
  expect(f.PriceBid).toBe(0);
  expect(f.SizeAsk).toBe(0);
  expect(f.SizeBid).toBe(0);
  expect(f.TickAttribBidAsk).toBeDefined();
});
