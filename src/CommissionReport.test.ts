import { CommissionReport } from './CommissionReport';

test('CommissionReport::constructor', () => {
  const f = new CommissionReport();
  expect(f.Commission).toBe(0);
  expect(f.Currency).toBe('');
  expect(f.ExecId).toBe('');
  expect(f.RealizedPNL).toBe(0);
  expect(f.Yield).toBe(0);
  expect(f.YieldRedemptionDate).toBe(0);
});

test('CommissionReport::getHashCode', () => {
  const f = new CommissionReport();
  const hash = f.GetHashCode();
  expect(hash).toBe(f.GetHashCode());
  expect(hash).toBe('b45accc95ef5ccecf488e95c0fc36d58909b965a15203f3ef89fb246ed46c61a');

  const f2 = new CommissionReport();
  const hash2 = f2.GetHashCode();
  expect(hash).toBe(hash2);
  expect(f2).not.toBe(f);
});

test('CommissionReport::Equals', () => {
  const f = new CommissionReport();
  const f2 = new CommissionReport();
  expect(f).not.toBe(f2);
  expect(f.Equals()).toBe(false);
  expect(f.Equals(f2)).toBe(true);
  expect(f.Equals(f)).toBe(true);
  f2.Commission = 333;
  expect(f.Equals(f2)).toBe(true);
  f2.ExecId = 'asfasf';
  expect(f.Equals(f2)).toBe(false);
  f2.ExecId = '';
  expect(f.Equals(f2)).toBe(true);
});
