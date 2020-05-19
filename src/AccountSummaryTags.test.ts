import { AccountSummaryTags } from './AccountSummaryTags';

test('AccountSummaryTags::GetAllTags', () => {
  const inst = new AccountSummaryTags();

  let expected = '';
  for (let prop in inst) {
    if (prop === 'GetAllTags') continue;
    if (expected) expected += ',';
    //@ts-ignore
    expected += inst[prop];
  }

  const actual = inst.GetAllTags();

  expect(typeof actual).toBe('string');
  expect(actual.length).toBeGreaterThan(0);
  expect(expected.length).toBe(actual.length);

  expect(Object.keys(inst).length).toBe(29);
});
