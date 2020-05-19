import { MinServerVer } from './MinServerVer';

test('MinServerVer', () => {
  expect(MinServerVer.MIN_VERSION).toBe(38);
});
