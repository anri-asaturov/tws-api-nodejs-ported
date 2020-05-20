import { TickAttrib } from './TickAttrib';

test('TickAttrib', () => {
  const t = new TickAttrib();
  expect(t.toString()).toBe('');
  t.CanAutoExecute = true;
  expect(t.toString()).toBe('canAutoExecute ');
  t.AskPastHigh = t.BidPastLow = t.PastLimit = t.PreOpen = t.Unreported = true;
  expect(t.toString()).toBe('canAutoExecute pastLimit preOpen unreported bidPastLow askPastHigh ');
});
