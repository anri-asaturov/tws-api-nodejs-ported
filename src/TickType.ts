export class TickType {
  static BID_SIZE = 0;
  static BID = 1;
  static ASK = 2;
  static ASK_SIZE = 3;
  static LAST = 4;
  static LAST_SIZE = 5;
  static HIGH = 6;
  static LOW = 7;
  static VOLUME = 8;
  static CLOSE = 9;
  static BID_OPTION = 10;
  static ASK_OPTION = 11;
  static LAST_OPTION = 12;
  static MODEL_OPTION = 13;
  static OPEN = 14;
  static LOW_13_WEEK = 15;
  static HIGH_13_WEEK = 16;
  static LOW_26_WEEK = 17;
  static HIGH_26_WEEK = 18;
  static LOW_52_WEEK = 19;
  static HIGH_52_WEEK = 20;
  static AVG_VOLUME = 21;
  static OPEN_INTEREST = 22;
  static OPTION_HISTORICAL_VOL = 23;
  static OPTION_IMPLIED_VOL = 24;
  static OPTION_BID_EXCH = 25;
  static OPTION_ASK_EXCH = 26;
  static OPTION_CALL_OPEN_INTEREST = 27;
  static OPTION_PUT_OPEN_INTEREST = 28;
  static OPTION_CALL_VOLUME = 29;
  static OPTION_PUT_VOLUME = 30;
  static INDEX_FUTURE_PREMIUM = 31;
  static BID_EXCH = 32;
  static ASK_EXCH = 33;
  static AUCTION_VOLUME = 34;
  static AUCTION_PRICE = 35;
  static AUCTION_IMBALANCE = 36;
  static MARK_PRICE = 37;
  static BID_EFP_COMPUTATION = 38;
  static ASK_EFP_COMPUTATION = 39;
  static LAST_EFP_COMPUTATION = 40;
  static OPEN_EFP_COMPUTATION = 41;
  static HIGH_EFP_COMPUTATION = 42;
  static LOW_EFP_COMPUTATION = 43;
  static CLOSE_EFP_COMPUTATION = 44;
  static LAST_TIMESTAMP = 45;
  static SHORTABLE = 46;
  static FUNDAMENTAL_RATIOS = 47;
  static RT_VOLUME = 48;
  static HALTED = 49;
  static BID_YIELD = 50;
  static ASK_YIELD = 51;
  static LAST_YIELD = 52;
  static CUST_OPTION_COMPUTATION = 53;
  static TRADE_COUNT = 54;
  static TRADE_RATE = 55;
  static VOLUME_RATE = 56;
  static LAST_RTH_TRADE = 57;
  static RT_HISTORICAL_VOL = 58;
  static IB_DIVIDENDS = 59;
  static BOND_FACTOR_MULTIPLIER = 60;
  static REGULATORY_IMBALANCE = 61;
  static NEWS_TICK = 62;
  static SHORT_TERM_VOLUME_3_MIN = 63;
  static SHORT_TERM_VOLUME_5_MIN = 64;
  static SHORT_TERM_VOLUME_10_MIN = 65;
  static DELAYED_BID = 66;
  static DELAYED_ASK = 67;
  static DELAYED_LAST = 68;
  static DELAYED_BID_SIZE = 69;
  static DELAYED_ASK_SIZE = 70;
  static DELAYED_LAST_SIZE = 71;
  static DELAYED_HIGH = 72;
  static DELAYED_LOW = 73;
  static DELAYED_VOLUME = 74;
  static DELAYED_CLOSE = 75;
  static DELAYED_OPEN = 76;
  static RT_TRD_VOLUME = 77;
  static CREDITMAN_MARK_PRICE = 78;
  static CREDITMAN_SLOW_MARK_PRICE = 79;
  static DELAYED_BID_OPTION = 80;
  static DELAYED_ASK_OPTION = 81;
  static DELAYED_LAST_OPTION = 82;
  static DELAYED_MODEL_OPTION = 83;
  static LAST_EXCH = 84;
  static LAST_REG_TIME = 85;
  static FUTURES_OPEN_INTEREST = 86;
  static AVG_OPT_VOLUME = 87;
  static DELAYED_LAST_TIMESTAMP = 88;
  static SHORTABLE_SHARES = 89;
  static DELAYED_HALTED = 90;
  /* istanbul ignore next */
  static getField(tickType: number) {
    switch (tickType) {
      case this.BID_SIZE:
        return 'bidSize';
      case this.BID:
        return 'bidPrice';
      case this.ASK:
        return 'askPrice';
      case this.ASK_SIZE:
        return 'askSize';
      case this.LAST:
        return 'lastPrice';
      case this.LAST_SIZE:
        return 'lastSize';
      case this.HIGH:
        return 'high';
      case this.LOW:
        return 'low';
      case this.VOLUME:
        return 'volume';
      case this.CLOSE:
        return 'close';
      case this.BID_OPTION:
        return 'bidOptComp';
      case this.ASK_OPTION:
        return 'askOptComp';
      case this.LAST_OPTION:
        return 'lastOptComp';
      case this.MODEL_OPTION:
        return 'modelOptComp';
      case this.OPEN:
        return 'open';
      case this.LOW_13_WEEK:
        return '13WeekLow';
      case this.HIGH_13_WEEK:
        return '13WeekHigh';
      case this.LOW_26_WEEK:
        return '26WeekLow';
      case this.HIGH_26_WEEK:
        return '26WeekHigh';
      case this.LOW_52_WEEK:
        return '52WeekLow';
      case this.HIGH_52_WEEK:
        return '52WeekHigh';
      case this.AVG_VOLUME:
        return 'AvgVolume';
      case this.OPEN_INTEREST:
        return 'OpenInterest';
      case this.OPTION_HISTORICAL_VOL:
        return 'OptionHistoricalVolatility';
      case this.OPTION_IMPLIED_VOL:
        return 'OptionImpliedVolatility';
      case this.OPTION_BID_EXCH:
        return 'OptionBidExchStr';
      case this.OPTION_ASK_EXCH:
        return 'OptionAskExchStr';
      case this.OPTION_CALL_OPEN_INTEREST:
        return 'OptionCallOpenInterest';
      case this.OPTION_PUT_OPEN_INTEREST:
        return 'OptionPutOpenInterest';
      case this.OPTION_CALL_VOLUME:
        return 'OptionCallVolume';
      case this.OPTION_PUT_VOLUME:
        return 'OptionPutVolume';
      case this.INDEX_FUTURE_PREMIUM:
        return 'IndexFuturePremium';
      case this.BID_EXCH:
        return 'bidExch';
      case this.ASK_EXCH:
        return 'askExch';
      case this.AUCTION_VOLUME:
        return 'auctionVolume';
      case this.AUCTION_PRICE:
        return 'auctionPrice';
      case this.AUCTION_IMBALANCE:
        return 'auctionImbalance';
      case this.MARK_PRICE:
        return 'markPrice';
      case this.BID_EFP_COMPUTATION:
        return 'bidEFP';
      case this.ASK_EFP_COMPUTATION:
        return 'askEFP';
      case this.LAST_EFP_COMPUTATION:
        return 'lastEFP';
      case this.OPEN_EFP_COMPUTATION:
        return 'openEFP';
      case this.HIGH_EFP_COMPUTATION:
        return 'highEFP';
      case this.LOW_EFP_COMPUTATION:
        return 'lowEFP';
      case this.CLOSE_EFP_COMPUTATION:
        return 'closeEFP';
      case this.LAST_TIMESTAMP:
        return 'lastTimestamp';
      case this.SHORTABLE:
        return 'shortable';
      case this.FUNDAMENTAL_RATIOS:
        return 'fundamentals';
      case this.RT_VOLUME:
        return 'RTVolume';
      case this.HALTED:
        return 'halted';
      case this.BID_YIELD:
        return 'bidYield';
      case this.ASK_YIELD:
        return 'askYield';
      case this.LAST_YIELD:
        return 'lastYield';
      case this.CUST_OPTION_COMPUTATION:
        return 'custOptComp';
      case this.TRADE_COUNT:
        return 'trades';
      case this.TRADE_RATE:
        return 'trades/min';
      case this.VOLUME_RATE:
        return 'volume/min';
      case this.LAST_RTH_TRADE:
        return 'lastRTHTrade';
      case this.RT_HISTORICAL_VOL:
        return 'RTHistoricalVol';
      case this.IB_DIVIDENDS:
        return 'IBDividends';
      case this.BOND_FACTOR_MULTIPLIER:
        return 'bondFactorMultiplier';
      case this.REGULATORY_IMBALANCE:
        return 'regulatoryImbalance';
      case this.NEWS_TICK:
        return 'newsTick';
      case this.SHORT_TERM_VOLUME_3_MIN:
        return 'shortTermVolume3Min';
      case this.SHORT_TERM_VOLUME_5_MIN:
        return 'shortTermVolume5Min';
      case this.SHORT_TERM_VOLUME_10_MIN:
        return 'shortTermVolume10Min';
      case this.DELAYED_BID:
        return 'delayedBid';
      case this.DELAYED_ASK:
        return 'delayedAsk';
      case this.DELAYED_LAST:
        return 'delayedLast';
      case this.DELAYED_BID_SIZE:
        return 'delayedBidSize';
      case this.DELAYED_ASK_SIZE:
        return 'delayedAskSize';
      case this.DELAYED_LAST_SIZE:
        return 'delayedLastSize';
      case this.DELAYED_HIGH:
        return 'delayedHigh';
      case this.DELAYED_LOW:
        return 'delayedLow';
      case this.DELAYED_VOLUME:
        return 'delayedVolume';
      case this.DELAYED_CLOSE:
        return 'delayedClose';
      case this.DELAYED_OPEN:
        return 'delayedOpen';
      case this.RT_TRD_VOLUME:
        return 'rtTrdVolume';
      case this.CREDITMAN_MARK_PRICE:
        return 'creditmanMarkPrice';
      case this.CREDITMAN_SLOW_MARK_PRICE:
        return 'creditmanSlowMarkPrice';
      case this.DELAYED_BID_OPTION:
        return 'delayedBidOptComp';
      case this.DELAYED_ASK_OPTION:
        return 'delayedAskOptComp';
      case this.DELAYED_LAST_OPTION:
        return 'delayedLastOptComp';
      case this.DELAYED_MODEL_OPTION:
        return 'delayedModelOptComp';
      case this.LAST_EXCH:
        return 'lastExchange';
      case this.LAST_REG_TIME:
        return 'lastRegTime';
      case this.FUTURES_OPEN_INTEREST:
        return 'futuresOpenInterest';
      case this.AVG_OPT_VOLUME:
        return 'avgOptVolume';
      case this.DELAYED_LAST_TIMESTAMP:
        return 'delayedLastTimestamp';
      case this.SHORTABLE_SHARES:
        return 'shortableShares';
      case this.DELAYED_HALTED:
        return 'delayedHalted';

      default:
        return 'unknown';
    }
  }
}
