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
  expect(hash).toBe('ddbe53a6b754af0a39caab228e44b4e1560d5a16693ab4a540717506592e75ac');

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

  f2.Commission = 44;
  expect(f.Equals(f2)).toBe(false);
  f2.Commission = 1;
  expect(f.Equals(f2)).toBe(true);
});
