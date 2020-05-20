import { BitMask } from './BitMask';

test('BitMask', () => {
  const m = new BitMask();
  expect(m.GetMask()).toBe(0);
  expect(m.getItem(0)).toBe(false);

  for (let i = 0; i < 32; i++) {
    m.setItem(i, true);
    for (let j = 0; j <= i; j++) expect(m.getItem(j)).toBe(true);
    for (let j = i + 1; j < 32; j++) expect(m.getItem(j)).toBe(false);
  }

  m.setItem(5, true);
  expect(m.getItem(5)).toBe(true);
  m.setItem(5, false);
  expect(m.getItem(5)).toBe(false);
  m.setItem(5, true);
  m.Clear();
  for (let i = 0; i < 32; i++) expect(m.getItem(i)).toBe(false);

  expect(() => m.setItem(33, true)).toThrow();
  expect(() => m.getItem(33)).toThrow();
});
