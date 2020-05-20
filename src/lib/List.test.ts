import { List } from './List';

test('List', () => {
  const list = new List<number>();
  expect(list.Count).toBe(0);
  list.push(4);
  expect(list.Count).toBe(1);
});
