/**
 * @brief The historical tick's description. Used when requesting historical tick data with whatToShow = BID_ASK
 * @sa EClient, EWrapper
 */

import { TickAttribBidAsk as TickAttribBidAskClass } from './TickAttribBidAsk';

export class HistoricalTickBidAsk {
  public constructor(
    public Time = 0,
    public TickAttribBidAsk: TickAttribBidAskClass = new TickAttribBidAskClass(),
    public PriceBid = 0,
    public PriceAsk = 0,
    public SizeBid = 0,
    public SizeAsk = 0
  ) {}
}
