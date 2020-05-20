/**
 * @brief Tick attributes that describes additional information for last price ticks
 * @sa EWrapper::tickByTickAllLast, EWrapper::historicalTicksLast
 */
export class TickAttribLast {
  /**
   * @brief Not currently used with trade data; only applies to bid/ask data.
   */
  PastLimit = false;

  /**
   * @brief Used with tick-by-tick last data or historical ticks last to indicate if a trade is classified as 'unreportable' (odd lots, combos, derivative trades, etc)
   */
  Unreported = false;

  /**
   * @brief Returns string to display.
   */
  toString() {
    return (this.PastLimit ? 'pastLimit ' : '') + (this.Unreported ? 'unreported ' : '');
  }
}
