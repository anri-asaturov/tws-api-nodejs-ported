import { OrderState } from './OrderState';

function getOrderState() {
  return new OrderState(
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    1,
    2,
    3,
    'k',
    'l',
    'm',
    'n'
  );
}

test('OrderState::constructor', () => {
  const f = new OrderState();
  expect(f.Commission).toBe(0);
  expect(f.CommissionCurrency).toBe('');
  expect(f.CompletedStatus).toBe('');
  expect(f.CompletedTime).toBe('');
  expect(f.EquityWithLoanAfter).toBe('');
  expect(f.EquityWithLoanBefore).toBe('');
  expect(f.EquityWithLoanChange).toBe('');
  expect(f.InitMarginAfter).toBe('');
  expect(f.InitMarginBefore).toBe('');
  expect(f.InitMarginChange).toBe('');
  expect(f.MaintMarginAfter).toBe('');
  expect(f.MaintMarginBefore).toBe('');
  expect(f.MaintMarginChange).toBe('');
  expect(f.MaxCommission).toBe(0);
  expect(f.MinCommission).toBe(0);
  expect(f.Status).toBe('');
  expect(f.WarningText).toBe('');
});

test('OrderState::getHashCode', () => {
  const f = getOrderState();
  const hash = f.GetHashCode();
  expect(hash).toBe(f.GetHashCode());
  expect(hash).toBe('d8e197d5c0ae016075908ea6dd5e7cadd751a3540c8052c5ba81c462f94d93b2');

  const f2 = getOrderState();
  const hash2 = f2.GetHashCode();
  expect(hash).toBe(hash2);
  expect(f2).not.toBe(f);
});

test('OrderState::Equals', () => {
  const f = getOrderState();
  const f2 = getOrderState();
  expect(f).not.toBe(f2);
  expect(f.Equals()).toBe(false);
  expect(f.Equals(f2)).toBe(true);
  expect(f.Equals(f)).toBe(true);
  f2.Status = '333';
  expect(f.Equals(f2)).toBe(false);
  f2.Status = 'a';
  expect(f.Equals(f2)).toBe(true);
});
