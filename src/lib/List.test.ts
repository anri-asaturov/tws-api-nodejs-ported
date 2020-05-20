import { TagValueList } from './List';
import { TagValue } from '../TagValue';

test('List', () => {
  const list = new TagValueList();
  expect(list.Count).toBe(0);
  list.push(new TagValue());
  expect(list.Count).toBe(1);
});
