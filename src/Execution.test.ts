import { Execution, Liquidity } from './Execution';

test('Liquidity', () => {
  expect(Liquidity.Values.size).toBe(4);
  const l = new Liquidity();
  expect(l.Value).toBe(0);
  expect(l.ToString()).toBe('None');
  l.Liquidity(2);
  expect(l.Value).toBe(2);
  expect(l.ToString()).toBe('Removed Liquidity');
});

test('Execution::constructor', () => {
  const f = new Execution();
  expect(f.AcctNumber).toBe('');
  expect(f.AvgPrice).toBe(0);
  expect(f.ClientId).toBe(0);
  expect(f.CumQty).toBe(0);
  expect(f.EvMultiplier).toBe(0);
  expect(f.EvRule).toBe('');
  expect(f.Exchange).toBe('');
  expect(f.ExecId).toBe('');
  expect(f.LastLiquidity.Value).toBe(0);
  expect(f.Liquidation).toBe(0);
  expect(f.ModelCode).toBe('');
  expect(f.OrderId).toBe(0);
  expect(f.OrderRef).toBe('');
  expect(f.PermId).toBe(0);
  expect(f.Price).toBe(0);
  expect(f.Shares).toBe(0);
  expect(f.Side).toBe('');
  expect(f.Time).toBe('');
});

test('Execution::getHashCode', () => {
  const f = new Execution();
  const hash = f.GetHashCode();
  expect(hash).toBe(f.GetHashCode());
  expect(hash).toBe('d95938503cf8a623aea19e17eb4a4df6dfce5be59354b1a23ed968ea4d972f3f');

  const f2 = new Execution();
  const hash2 = f2.GetHashCode();
  expect(hash).toBe(hash2);
  expect(f2).not.toBe(f);
});

test('Execution::Equals', () => {
  const f = new Execution();
  const f2 = new Execution();
  expect(f).not.toBe(f2);
  expect(f.Equals()).toBe(false);
  expect(f.Equals(f2)).toBe(true);
  expect(f.Equals(f)).toBe(true);
  f2.ExecId = '333';
  expect(f.Equals(f2)).toBe(false);
  f2.ExecId = '';
  expect(f.Equals(f2)).toBe(true);
});
