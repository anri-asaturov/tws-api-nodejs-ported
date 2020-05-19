import { ComboLeg } from './ComboLeg';

test('ComboLeg::constructor empty', () => {
  const leg = new ComboLeg();
  expect(leg.ConId).toBe(0);
  expect(leg.Ratio).toBe(0);
  expect(leg.Action).toBe('');
  expect(leg.Exchange).toBe('');
  expect(leg.OpenClose).toBe(0);
  expect(leg.ShortSaleSlot).toBe(0);
  expect(leg.DesignatedLocation).toBe(0);
  expect(leg.ExemptCode).toBe(0);
  expect(Object.keys(leg).length).toBe(8);
});

test('ComboLeg::constructor non-empty', () => {
  const leg = new ComboLeg(1, 2, 'a', 'b', 3, 4, 5, 6);
  expect(leg.ConId).toBe(1);
  expect(leg.Ratio).toBe(2);
  expect(leg.Action).toBe('a');
  expect(leg.Exchange).toBe('b');
  expect(leg.OpenClose).toBe(3);
  expect(leg.ShortSaleSlot).toBe(4);
  expect(leg.DesignatedLocation).toBe(5);
  expect(leg.ExemptCode).toBe(6);
  expect(Object.keys(leg).length).toBe(8);
});

test('ComboLeg static props', () => {
  expect(ComboLeg.SAME).toBe(0);
  expect(ComboLeg.OPEN).toBe(1);
  expect(ComboLeg.CLOSE).toBe(2);
  expect(ComboLeg.UNKNOWN).toBe(3);
});
