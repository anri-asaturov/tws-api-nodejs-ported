import { Bar } from './Bar';

test('Bar::constructor', () => {
  const inst = new Bar('abc', 1, 2, 3, 4, 5, 6, 7);
  expect(inst.Time).toBe('abc');
  expect(inst.Open).toBe(1);
  expect(inst.High).toBe(2);
  expect(inst.Low).toBe(3);
  expect(inst.Close).toBe(4);
  expect(inst.Volume).toBe(5);
  expect(inst.Count).toBe(6);
  expect(inst.WAP).toBe(7);
  expect(Object.keys(inst).length).toBe(8);
});
