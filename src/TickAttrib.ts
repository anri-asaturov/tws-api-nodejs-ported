/**
 * @brief Tick attributes that describes additional information for price ticks
 * @sa EWrapper::tickPrice
 */
export class TickAttrib {
  /**
   * @brief Used with tickPrice callback from reqMktData. Specifies whether the price tick is available for automatic execution (1) or not (0).
   */
  CanAutoExecute = false;

  /**
   * @brief Used with tickPrice to indicate if the bid price is lower than the day's lowest value or the ask price is higher than the highest ask
   */
  PastLimit = false;

  /**
   * @brief Indicates whether the bid/ask price tick is from pre-open session
   */
  PreOpen = false;

  /**
   * @brief Used with tick-by-tick data to indicate if a trade is classified as 'unreportable' (odd lots, combos, derivative trades, etc)
   */
  Unreported = false;

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
    return (
      (this.CanAutoExecute ? 'canAutoExecute ' : '') +
      (this.PastLimit ? 'pastLimit ' : '') +
      (this.PreOpen ? 'preOpen ' : '') +
      (this.Unreported ? 'unreported ' : '') +
      (this.BidPastLow ? 'bidPastLow ' : '') +
      (this.AskPastHigh ? 'askPastHigh ' : '')
    );
  }
}
