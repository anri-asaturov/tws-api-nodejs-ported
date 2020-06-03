import { BinaryWriter } from './BinaryWriter';

test('BinaryWriter::Write', () => {
  const c = new BinaryWriter();
  expect(c.pos).toBe(0);
  expect(c.buffer.length).toBe(1024);
  c.Write([1, 2, 3]);
  expect(c.buffer[1]).toEqual(2);
});
