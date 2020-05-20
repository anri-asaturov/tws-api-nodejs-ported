import { TickAttribLast } from './TickAttribLast';

test('TickAttribLast', () => {
  const t = new TickAttribLast();
  expect(t.toString()).toBe('');
  t.PastLimit = true;
  expect(t.toString()).toBe('pastLimit ');
  t.Unreported = true;
  expect(t.toString()).toBe('pastLimit unreported ');
});
