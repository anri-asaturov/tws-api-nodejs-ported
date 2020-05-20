import { TickType } from './TickType';

test('TickType', () => {
  expect(TickType.getField(TickType.ASK)).toBe('askPrice');
});
