/**
 * @brief The historical last tick's description. Used when requesting historical tick data with whatToShow = TRADES
 * @sa EClient, EWrapper
 */

import { TickAttribLast as TickAttribLastClass } from './TickAttribLast';

export class HistoricalTickLast {
  public constructor(
    public Time = 0,
    public TickAttribLast: TickAttribLastClass = new TickAttribLastClass(),
    public Price = 0,
    public Size = 0,
    public Exchange = '',
    public SpecialConditions = ''
  ) {}
}
