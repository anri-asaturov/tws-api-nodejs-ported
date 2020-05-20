import { Contract as ContractClass } from './Contract';
import { TagValueList } from './lib/List';

/**
 * @class ContractDetails
 * @sa Contract
 */
export class ContractDetails {
  Contract = new ContractClass();
  MarketName = '';
  MinTick = 0;
  PriceMagnifier = 0;
  OrderTypes = '';
  ValidExchanges = '';
  UnderConId = 0;
  LongName = '';
  ContractMonth = '';
  Industry = '';
  Category = '';
  Subcategory = '';
  TimeZoneId = '';
  TradingHours = '';
  LiquidHours = '';
  EvRule = '';
  EvMultiplier = 0;
  MdSizeMultiplier = 0;
  AggGroup = 0;
  SecIdList = new TagValueList();
  UnderSymbol = '';
  UnderSecType = '';
  MarketRuleIds = '';
  RealExpirationDate = '';
  LastTradeTime = '';
  StockType = '';

  // BOND values
  Cusip = '';
  Ratings = '';
  DescAppend = '';
  BondType = '';
  CouponType = '';
  Callable = false;
  Putable = false;
  Coupon = 0;
  Convertible = false;
  Maturity = '';
  IssueDate = '';
  NextOptionDate = '';
  NextOptionType = '';
  NextOptionPartial = false;
  Notes = '';

  public constructor(
    summary = new ContractClass(),
    marketName = '',
    minTick = 0,
    orderTypes = '',
    validExchanges = '',
    underConId = 0,
    longName = '',
    contractMonth = '',
    industry = '',
    category = '',
    subcategory = '',
    timeZoneId = '',
    tradingHours = '',
    liquidHours = '',
    evRule = '',
    evMultiplier = 0,
    aggGroup = 0
  ) {
    this.Contract = summary;
    this.MarketName = marketName;
    this.MinTick = minTick;
    this.OrderTypes = orderTypes;
    this.ValidExchanges = validExchanges;
    this.UnderConId = underConId;
    this.LongName = longName;
    this.ContractMonth = contractMonth;
    this.Industry = industry;
    this.Category = category;
    this.Subcategory = subcategory;
    this.TimeZoneId = timeZoneId;
    this.TradingHours = tradingHours;
    this.LiquidHours = liquidHours;
    this.EvRule = evRule;
    this.EvMultiplier = evMultiplier;
    this.AggGroup = aggGroup;
  }
}
