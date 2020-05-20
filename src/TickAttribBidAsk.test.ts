import { TickAttribBidAsk } from './TickAttribBidAsk';

test('TickAttribBidAsk', () => {
  const t = new TickAttribBidAsk();
  expect(t.toString()).toBe('');
  t.AskPastHigh = true;
  expect(t.toString()).toBe('askPastHigh ');
  t.AskPastHigh = t.BidPastLow = true;
  expect(t.toString()).toBe('bidPastLow askPastHigh ');
});
