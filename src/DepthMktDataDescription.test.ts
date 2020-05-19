import { DepthMktDataDescription } from './DepthMktDataDescription';

test('DepthMktDataDescription::constructor empty', () => {
  const desc = new DepthMktDataDescription();
  expect(desc.Exchange).toBe('');
  expect(desc.SecType).toBe('');
  expect(desc.ListingExch).toBe('');
  expect(desc.ServiceDataType).toBe('');
  expect(desc.AggGroup).toBe(0);

  expect(Object.keys(desc).length).toBe(5);
});

test('DepthMktDataDescription::constructor non-empty', () => {
  const desc = new DepthMktDataDescription('a', 'b', 'c', 'd', 1);
  expect(desc.Exchange).toBe('a');
  expect(desc.SecType).toBe('b');
  expect(desc.ListingExch).toBe('c');
  expect(desc.ServiceDataType).toBe('d');
  expect(desc.AggGroup).toBe(1);

  expect(Object.keys(desc).length).toBe(5);
});
