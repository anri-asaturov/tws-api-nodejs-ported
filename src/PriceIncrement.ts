/**
 * @brief Class describing price increment
 * @sa EClient::reqMarketRule, EWrapper::marketRule
 */
export class PriceIncrement {
  public constructor(public LowEdge = 0, public Increment = 0) {}
}
