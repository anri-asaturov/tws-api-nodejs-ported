/**
 * @brief Tick attributes that describes additional information for bid/ask price ticks
 * @sa EWrapper::tickByTickBidAsk, EWrapper::historicalTicksBidAsk
 */
export class TickAttribBidAsk {
  /**
   * @brief Used with real time tick-by-tick. Indicates if bid is lower than day's lowest low.
   */
  BidPastLow = false;

  /**
   * @brief Used with real time tick-by-tick. Indicates if ask is higher than day's highest ask.
   */
  AskPastHigh = false;

  /**
   * @brief Returns string to display.
   */
  toString() {
    return (this.BidPastLow ? 'bidPastLow ' : '') + (this.AskPastHigh ? 'askPastHigh ' : '');
  }
}
