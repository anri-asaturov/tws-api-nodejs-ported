import { SoftDollarTier } from './SoftDollarTier';
import { TagValueList, OrderComboLegList, OrderConditionList } from './lib/List';
import { compareStrings } from './lib/string';
import { VectorEqualsUnordered } from './Util';
import { getHashCode } from './lib/hash';

export class Order {
  static CUSTOMER = 0;
  static FIRM = 1;
  static OPT_UNKNOWN = '?';
  static OPT_BROKER_DEALER = 'b';
  static OPT_CUSTOMER = 'c';
  static OPT_FIRM = 'f';
  static OPT_ISEMM = 'm';
  static OPT_FARMM = 'n';
  static OPT_SPECIALIST = 'y';
  static AUCTION_MATCH = 1;
  static AUCTION_IMPROVEMENT = 2;
  static AUCTION_TRANSPARENT = 3;
  static EMPTY_STR = '';

  // main order fields
  OrderId = 0;
  ClientId = 0;
  PermId = 0;
  Action = '';
  TotalQuantity = 0;
  OrderType = '';
  LmtPrice = Number.MAX_VALUE;
  AuxPrice = Number.MAX_VALUE;
  // extended order fields
  // "Time in Force" - DAY, GTC, etc.
  Tif = '';
  //GTC orders
  ActiveStartTime = '';
  ActiveStopTime = '';
  // one cancels all group name
  OcaGroup = '';
  // 1 = CANCEL_WITH_BLOCK, 2 = REDUCE_WITH_BLOCK, 3 = REDUCE_NON_BLOCK
  OcaType = 0;
  OrderRef = '';
  // if false, order will be created but not transmitted
  Transmit = false;
  // Parent order Id, to associate Auto STP or TRAIL orders with the original order.
  ParentId = 0;
  BlockOrder = false;
  SweepToFill = false;
  DisplaySize = 0;
  // 0=Default, 1=Double_Bid_Ask, 2=Last, 3=Double_Last, 4=Bid_Ask, 7=Last_or_Bid_Ask, 8=Mid-point
  TriggerMethod = 0;
  OutsideRth = false;
  Hidden = false;
  // FORMAT: 20060505 08:00:00 {time zone}
  GoodAfterTime = '';
  // FORMAT: 20060505 08:00:00 {time zone}
  GoodTillDate = '';
  OverridePercentageConstraints = false;
  // Individual = 'I', Agency = 'A', AgentOtherMember = 'W', IndividualPTIA = 'J', AgencyPTIA = 'U', AgentOtherMemberPTIA = 'M', IndividualPT = 'K', AgencyPT = 'Y', AgentOtherMemberPT = 'N'
  Rule80A = '';
  AllOrNone = false;
  MinQty = Number.MAX_VALUE;
  // REL orders only
  PercentOffset = Number.MAX_VALUE;
  // for TRAILLIMIT orders only
  TrailStopPrice = Number.MAX_VALUE;
  TrailingPercent = Number.MAX_VALUE;
  // Financial advisors only
  FaGroup = '';
  FaProfile = '';
  FaMethod = '';
  FaPercentage = '';
  // Institutional orders only
  // O=Open, C=Close
  OpenClose = '';
  // 0=Customer, 1=Firm
  Origin = Order.CUSTOMER;
  // 1 if you hold the shares, 2 if they will be delivered from elsewhere.  Only for Action="SSHORT
  ShortSaleSlot = 0;
  // set when slot=2 only.
  DesignatedLocation = '';
  ExemptCode = -1;
  // SMART routing only
  DiscretionaryAmt = 0;
  ETradeOnly = false;
  FirmQuoteOnly = false;
  NbboPriceCap = Number.MAX_VALUE;
  OptOutSmartRouting = false;
  // BOX or VOL ORDERS ONLY
  // 1=AUCTION_MATCH, 2=AUCTION_IMPROVEMENT, 3=AUCTION_TRANSPARENT
  AuctionStrategy = 0;
  // BOX ORDERS ONLY
  StartingPrice = Number.MAX_VALUE;
  StockRefPrice = Number.MAX_VALUE;
  Delta = Number.MAX_VALUE;
  // pegged to stock or VOL orders
  StockRangeLower = Number.MAX_VALUE;
  StockRangeUpper = Number.MAX_VALUE;
  // VOLATILITY ORDERS ONLY
  Volatility = Number.MAX_VALUE;
  // 1=daily, 2=annual
  VolatilityType = Number.MAX_VALUE;
  ContinuousUpdate = 0;
  // 1=Average, 2 = BidOrAsk
  ReferencePriceType = Number.MAX_VALUE;
  DeltaNeutralOrderType = '';
  DeltaNeutralAuxPrice = Number.MAX_VALUE;
  DeltaNeutralConId = 0;
  DeltaNeutralSettlingFirm = '';

  DeltaNeutralClearingAccount = '';
  DeltaNeutralClearingIntent = '';
  DeltaNeutralOpenClose = '';
  DeltaNeutralShortSale = false;
  DeltaNeutralShortSaleSlot = 0;
  DeltaNeutralDesignatedLocation = '';
  // COMBO ORDERS ONLY
  // EFP orders only
  BasisPoints = Number.MAX_VALUE;
  // EFP orders only
  BasisPointsType = Number.MAX_VALUE;
  // SCALE ORDERS ONLY
  ScaleInitLevelSize = Number.MAX_VALUE;
  ScaleSubsLevelSize = Number.MAX_VALUE;
  ScalePriceIncrement = Number.MAX_VALUE;
  ScalePriceAdjustValue = Number.MAX_VALUE;
  ScalePriceAdjustInterval = Number.MAX_VALUE;
  ScaleProfitOffset = Number.MAX_VALUE;
  ScaleAutoReset = false;
  ScaleInitPosition = Number.MAX_VALUE;
  ScaleInitFillQty = Number.MAX_VALUE;
  ScaleRandomPercent = false;
  ScaleTable = '';
  // HEDGE ORDERS ONLY
  // 'D' - delta, 'B' - beta, 'F' - FX, 'P' - pair
  HedgeType = '';
  // beta value for beta hedge, ratio for pair hedge
  HedgeParam = '';
  // Clearing info
  Account = ''; // IB account
  // True beneficiary of the order
  ClearingAccount = '';
  // "" (Default), "IB", "Away", "PTA" (PostTrade)
  ClearingIntent = '';
  // ALGO ORDERS ONLY
  AlgoStrategy = '';
  AlgoParams = new TagValueList();
  // What-if
  WhatIf = false;
  //algoId
  AlgoId = '';
  // Not Held
  NotHeld = false;
  SettlingFirm = '';
  // Smart combo routing params
  SmartComboRoutingParams = new TagValueList();
  // order combo legs
  OrderComboLegs = new OrderComboLegList();
  OrderMiscOptions = new TagValueList();
  Solicited = false;
  ModelCode = '';
  ExtOperator = '';
  // native cash quantity
  CashQty = Number.MAX_VALUE;

  // don't use auto price for hedge
  DontUseAutoPriceForHedge = false;

  AutoCancelDate = '';
  FilledQuantity = Number.MAX_VALUE;
  RefFuturesConId = Number.MAX_VALUE;
  AutoCancelParent = false;
  Shareholder = '';
  ImbalanceOnly = false;
  RouteMarketableToBbo = false;
  ParentPermId = Number.MAX_VALUE;

  /**
   * @brief Identifies a person as the responsible party for investment decisions within the firm. Orders covered by MiFID 2 (Markets in Financial Instruments Directive 2) must include either Mifid2DecisionMaker or Mifid2DecisionAlgo field (but not both). Requires TWS 969+.
   */
  Mifid2DecisionMaker = '';

  /**
   * @brief Identifies the algorithm responsible for investment decisions within the firm. Orders covered under MiFID 2 must include either Mifid2DecisionMaker or Mifid2DecisionAlgo, but cannot have both. Requires TWS 969+.
   */
  Mifid2DecisionAlgo = '';

  /**
   * @brief For MiFID 2 reporting; identifies a person as the responsible party for the execution of a transaction within the firm. Requires TWS 969+.
   */
  Mifid2ExecutionTrader = '';

  /**
   * @brief For MiFID 2 reporting; identifies the algorithm responsible for the execution of a transaction within the firm. Requires TWS 969+.
   */
  Mifid2ExecutionAlgo = '';

  // Note: Two orders can be 'equivalent' even if all fields do not match. This function is not intended to be used with Order objects returned from TWS.
  Equals(l_theOther: Order) {
    if (this === l_theOther) return true;

    if (l_theOther == null) return false;

    if (this.PermId == l_theOther.PermId) {
      return true;
    }

    if (
      this.OrderId != l_theOther.OrderId ||
      this.ClientId != l_theOther.ClientId ||
      this.TotalQuantity != l_theOther.TotalQuantity ||
      this.LmtPrice != l_theOther.LmtPrice ||
      this.AuxPrice != l_theOther.AuxPrice ||
      this.OcaType != l_theOther.OcaType ||
      this.Transmit != l_theOther.Transmit ||
      this.ParentId != l_theOther.ParentId ||
      this.BlockOrder != l_theOther.BlockOrder ||
      this.SweepToFill != l_theOther.SweepToFill ||
      this.DisplaySize != l_theOther.DisplaySize ||
      this.TriggerMethod != l_theOther.TriggerMethod ||
      this.OutsideRth != l_theOther.OutsideRth ||
      this.Hidden != l_theOther.Hidden ||
      this.OverridePercentageConstraints != l_theOther.OverridePercentageConstraints ||
      this.AllOrNone != l_theOther.AllOrNone ||
      this.MinQty != l_theOther.MinQty ||
      this.PercentOffset != l_theOther.PercentOffset ||
      this.TrailStopPrice != l_theOther.TrailStopPrice ||
      this.TrailingPercent != l_theOther.TrailingPercent ||
      this.Origin != l_theOther.Origin ||
      this.ShortSaleSlot != l_theOther.ShortSaleSlot ||
      this.DiscretionaryAmt != l_theOther.DiscretionaryAmt ||
      this.ETradeOnly != l_theOther.ETradeOnly ||
      this.FirmQuoteOnly != l_theOther.FirmQuoteOnly ||
      this.NbboPriceCap != l_theOther.NbboPriceCap ||
      this.OptOutSmartRouting != l_theOther.OptOutSmartRouting ||
      this.AuctionStrategy != l_theOther.AuctionStrategy ||
      this.StartingPrice != l_theOther.StartingPrice ||
      this.StockRefPrice != l_theOther.StockRefPrice ||
      this.Delta != l_theOther.Delta ||
      this.StockRangeLower != l_theOther.StockRangeLower ||
      this.StockRangeUpper != l_theOther.StockRangeUpper ||
      this.Volatility != l_theOther.Volatility ||
      this.VolatilityType != l_theOther.VolatilityType ||
      this.ContinuousUpdate != l_theOther.ContinuousUpdate ||
      this.ReferencePriceType != l_theOther.ReferencePriceType ||
      this.DeltaNeutralAuxPrice != l_theOther.DeltaNeutralAuxPrice ||
      this.DeltaNeutralConId != l_theOther.DeltaNeutralConId ||
      this.DeltaNeutralShortSale != l_theOther.DeltaNeutralShortSale ||
      this.DeltaNeutralShortSaleSlot != l_theOther.DeltaNeutralShortSaleSlot ||
      this.BasisPoints != l_theOther.BasisPoints ||
      this.BasisPointsType != l_theOther.BasisPointsType ||
      this.ScaleInitLevelSize != l_theOther.ScaleInitLevelSize ||
      this.ScaleSubsLevelSize != l_theOther.ScaleSubsLevelSize ||
      this.ScalePriceIncrement != l_theOther.ScalePriceIncrement ||
      this.ScalePriceAdjustValue != l_theOther.ScalePriceAdjustValue ||
      this.ScalePriceAdjustInterval != l_theOther.ScalePriceAdjustInterval ||
      this.ScaleProfitOffset != l_theOther.ScaleProfitOffset ||
      this.ScaleAutoReset != l_theOther.ScaleAutoReset ||
      this.ScaleInitPosition != l_theOther.ScaleInitPosition ||
      this.ScaleInitFillQty != l_theOther.ScaleInitFillQty ||
      this.ScaleRandomPercent != l_theOther.ScaleRandomPercent ||
      this.WhatIf != l_theOther.WhatIf ||
      this.NotHeld != l_theOther.NotHeld ||
      this.ExemptCode != l_theOther.ExemptCode ||
      this.RandomizePrice != l_theOther.RandomizePrice ||
      this.RandomizeSize != l_theOther.RandomizeSize ||
      this.Solicited != l_theOther.Solicited ||
      this.ConditionsIgnoreRth != l_theOther.ConditionsIgnoreRth ||
      this.ConditionsCancelOrder != l_theOther.ConditionsCancelOrder ||
      this.Tier != l_theOther.Tier ||
      this.CashQty != l_theOther.CashQty ||
      this.DontUseAutoPriceForHedge != l_theOther.DontUseAutoPriceForHedge ||
      this.IsOmsContainer != l_theOther.IsOmsContainer ||
      this.UsePriceMgmtAlgo != l_theOther.UsePriceMgmtAlgo ||
      this.FilledQuantity != l_theOther.FilledQuantity ||
      this.RefFuturesConId != l_theOther.RefFuturesConId ||
      this.AutoCancelParent != l_theOther.AutoCancelParent ||
      this.ImbalanceOnly != l_theOther.ImbalanceOnly ||
      this.RouteMarketableToBbo != l_theOther.RouteMarketableToBbo ||
      this.ParentPermId != l_theOther.ParentPermId
    ) {
      return false;
    }

    if (
      compareStrings(this.Action, l_theOther.Action) != 0 ||
      compareStrings(this.OrderType, l_theOther.OrderType) != 0 ||
      compareStrings(this.Tif, l_theOther.Tif) != 0 ||
      compareStrings(this.ActiveStartTime, l_theOther.ActiveStartTime) != 0 ||
      compareStrings(this.ActiveStopTime, l_theOther.ActiveStopTime) != 0 ||
      compareStrings(this.OcaGroup, l_theOther.OcaGroup) != 0 ||
      compareStrings(this.OrderRef, l_theOther.OrderRef) != 0 ||
      compareStrings(this.GoodAfterTime, l_theOther.GoodAfterTime) != 0 ||
      compareStrings(this.GoodTillDate, l_theOther.GoodTillDate) != 0 ||
      compareStrings(this.Rule80A, l_theOther.Rule80A) != 0 ||
      compareStrings(this.FaGroup, l_theOther.FaGroup) != 0 ||
      compareStrings(this.FaProfile, l_theOther.FaProfile) != 0 ||
      compareStrings(this.FaMethod, l_theOther.FaMethod) != 0 ||
      compareStrings(this.FaPercentage, l_theOther.FaPercentage) != 0 ||
      compareStrings(this.OpenClose, l_theOther.OpenClose) != 0 ||
      compareStrings(this.DesignatedLocation, l_theOther.DesignatedLocation) != 0 ||
      compareStrings(this.DeltaNeutralOrderType, l_theOther.DeltaNeutralOrderType) != 0 ||
      compareStrings(this.DeltaNeutralSettlingFirm, l_theOther.DeltaNeutralSettlingFirm) != 0 ||
      compareStrings(this.DeltaNeutralClearingAccount, l_theOther.DeltaNeutralClearingAccount) !=
        0 ||
      compareStrings(this.DeltaNeutralClearingIntent, l_theOther.DeltaNeutralClearingIntent) != 0 ||
      compareStrings(this.DeltaNeutralOpenClose, l_theOther.DeltaNeutralOpenClose) != 0 ||
      compareStrings(
        this.DeltaNeutralDesignatedLocation,
        l_theOther.DeltaNeutralDesignatedLocation
      ) != 0 ||
      compareStrings(this.HedgeType, l_theOther.HedgeType) != 0 ||
      compareStrings(this.HedgeParam, l_theOther.HedgeParam) != 0 ||
      compareStrings(this.Account, l_theOther.Account) != 0 ||
      compareStrings(this.SettlingFirm, l_theOther.SettlingFirm) != 0 ||
      compareStrings(this.ClearingAccount, l_theOther.ClearingAccount) != 0 ||
      compareStrings(this.ClearingIntent, l_theOther.ClearingIntent) != 0 ||
      compareStrings(this.AlgoStrategy, l_theOther.AlgoStrategy) != 0 ||
      compareStrings(this.AlgoId, l_theOther.AlgoId) != 0 ||
      compareStrings(this.ScaleTable, l_theOther.ScaleTable) != 0 ||
      compareStrings(this.ModelCode, l_theOther.ModelCode) != 0 ||
      compareStrings(this.ExtOperator, l_theOther.ExtOperator) != 0 ||
      compareStrings(this.AutoCancelDate, l_theOther.AutoCancelDate) != 0 ||
      compareStrings(this.Shareholder, l_theOther.Shareholder) != 0
    ) {
      return false;
    }

    if (!VectorEqualsUnordered(this.AlgoParams, l_theOther.AlgoParams)) {
      return false;
    }

    if (!VectorEqualsUnordered(this.SmartComboRoutingParams, l_theOther.SmartComboRoutingParams)) {
      return false;
    }

    // compare order combo legs
    if (!VectorEqualsUnordered(this.OrderComboLegs, l_theOther.OrderComboLegs)) {
      return false;
    }

    return true;
  }

  GetHashCode() {
    return getHashCode(
      this.OrderId,
      this.Solicited,
      this.ClientId,
      this.PermId,
      this.Action,
      this.TotalQuantity,
      this.OrderType,
      this.LmtPrice,
      this.AuxPrice,
      this.Tif,
      this.OcaGroup,
      this.OcaType,
      this.OrderRef,
      this.Transmit,
      this.ParentId,
      this.BlockOrder,
      this.SweepToFill,
      this.DisplaySize,
      this.TriggerMethod,
      this.OutsideRth,
      this.Hidden,
      this.GoodAfterTime,
      this.GoodTillDate,
      this.OverridePercentageConstraints,
      this.Rule80A,
      this.AllOrNone,
      this.MinQty,
      this.PercentOffset,
      this.TrailStopPrice,
      this.TrailingPercent,
      this.FaGroup,
      this.FaProfile,
      this.FaMethod,
      this.FaPercentage,
      this.OpenClose,
      this.Origin,
      this.ShortSaleSlot,
      this.DesignatedLocation,
      this.ExemptCode,
      this.DiscretionaryAmt,
      this.ETradeOnly,
      this.FirmQuoteOnly,
      this.NbboPriceCap,
      this.OptOutSmartRouting,
      this.AuctionStrategy,
      this.StartingPrice,
      this.StockRefPrice,
      this.Delta,
      this.StockRangeLower,
      this.StockRangeUpper,
      this.Volatility,
      this.VolatilityType,
      this.ContinuousUpdate,
      this.ReferencePriceType,
      this.DeltaNeutralOrderType,
      this.DeltaNeutralAuxPrice,
      this.DeltaNeutralConId,
      this.DeltaNeutralSettlingFirm,
      this.DeltaNeutralClearingAccount,
      this.DeltaNeutralClearingIntent,
      this.DeltaNeutralOpenClose,
      this.DeltaNeutralShortSale,
      this.DeltaNeutralShortSaleSlot,
      this.DeltaNeutralDesignatedLocation,
      this.BasisPoints,
      this.BasisPointsType,
      this.ScaleInitLevelSize,
      this.ScaleSubsLevelSize,
      this.ScalePriceIncrement,
      this.ScalePriceAdjustValue,
      this.ScalePriceAdjustInterval,
      this.ScaleProfitOffset,
      this.ScaleAutoReset,
      this.ScaleInitPosition,
      this.ScaleInitFillQty,
      this.ScaleRandomPercent,
      this.HedgeType,
      this.HedgeParam,
      this.Account,
      this.SettlingFirm,
      this.ClearingAccount,
      this.ClearingIntent,
      this.AlgoStrategy,
      this.AlgoParams.GetHashCode(),
      this.WhatIf,
      this.AlgoId,
      this.NotHeld,
      this.SmartComboRoutingParams.GetHashCode(),
      this.OrderComboLegs.GetHashCode(),
      this.OrderMiscOptions.GetHashCode(),
      this.ActiveStartTime,
      this.ActiveStopTime,
      this.ScaleTable,
      this.ModelCode,
      this.ExtOperator,
      this.CashQty,
      this.Mifid2DecisionMaker,
      this.Mifid2DecisionAlgo,
      this.Mifid2ExecutionTrader,
      this.Mifid2ExecutionAlgo,
      this.DontUseAutoPriceForHedge,
      this.AutoCancelDate,
      this.FilledQuantity,
      this.RefFuturesConId,
      this.AutoCancelParent,
      this.Shareholder,
      this.ImbalanceOnly,
      this.RouteMarketableToBbo,
      this.ParentPermId,
      this.RandomizeSize,
      this.RandomizePrice,
      this.ReferenceContractId,
      this.IsPeggedChangeAmountDecrease,
      this.PeggedChangeAmount,
      this.ReferenceChangeAmount,
      this.ReferenceExchange,
      this.AdjustedOrderType,
      this.TriggerPrice,
      this.LmtPriceOffset,
      this.AdjustedStopPrice,
      this.AdjustedStopLimitPrice,
      this.AdjustedTrailingAmount,
      this.AdjustableTrailingUnit,
      this.Conditions.GetHashCode(),
      this.ConditionsIgnoreRth,
      this.ConditionsCancelOrder,
      this.Tier.GetHashCode(),
      this.IsOmsContainer,
      this.DiscretionaryUpToLimitPrice,
      this.UsePriceMgmtAlgo
    );
  }

  /**
   * @brief - DOC_TODO
   */
  RandomizeSize = false;
  /**
   * @brief - DOC_TODO
   */

  RandomizePrice = false;

  /**
   * @brief Pegged-to-benchmark orders: this attribute will contain the conId of the contract against which the order will be pegged.
   */
  ReferenceContractId = 0;
  /**
   * @brief Pegged-to-benchmark orders: indicates whether the order's pegged price should increase or decreases.
   */
  IsPeggedChangeAmountDecrease = false;
  /**
   * @brief Pegged-to-benchmark orders: amount by which the order's pegged price should move.
   */
  PeggedChangeAmount = 0;
  /**
   * @brief Pegged-to-benchmark orders: the amount the reference contract needs to move to adjust the pegged order.
   */
  ReferenceChangeAmount = 0;
  /**
   * @brief Pegged-to-benchmark orders: the exchange against which we want to observe the reference contract.
   */
  ReferenceExchange = '';

  /**
   * @brief Adjusted Stop orders: the parent order will be adjusted to the given type when the adjusted trigger price is penetrated.
   */
  AdjustedOrderType = '';

  /**
   * @brief - DOC_TODO
   */
  TriggerPrice = Number.MAX_VALUE;

  /**
   * @brief - DOC_TODO
   */
  LmtPriceOffset = Number.MAX_VALUE;

  /**
   * @brief Adjusted Stop orders: specifies the stop price of the adjusted (STP) parent
   */
  AdjustedStopPrice = Number.MAX_VALUE;

  /**
   * @brief Adjusted Stop orders: specifies the stop limit price of the adjusted (STPL LMT) parent
   */
  AdjustedStopLimitPrice = Number.MAX_VALUE;

  /**
   * @brief Adjusted Stop orders: specifies the trailing amount of the adjusted (TRAIL) parent
   */
  AdjustedTrailingAmount = Number.MAX_VALUE;

  /**
   * @brief Adjusted Stop orders: specifies where the trailing unit is an amount (set to 0) or a percentage (set to 1)
   */
  AdjustableTrailingUnit = 0;

  /**
   * @brief Conditions determining when the order will be activated or canceled
   */
  Conditions = new OrderConditionList();
  /**
   * @brief Indicates whether or not conditions will also be valid outside Regular Trading Hours
   */
  ConditionsIgnoreRth = false;

  /**
   * @brief Conditions can determine if an order should become active or canceled.
   */
  ConditionsCancelOrder = false;

  /**
   * @brief Define the Soft Dollar Tier used for the order. Only provided for registered professional advisors and hedge and mutual funds.
   */
  Tier = new SoftDollarTier();

  /**
   * @brief Set to true to create tickets from API orders when TWS is used as an OMS
   */
  IsOmsContainer = false;

  /**
   * @brief Set to true to convert order of type 'Primary Peg' to 'D-Peg'
   */
  DiscretionaryUpToLimitPrice = false;

  UsePriceMgmtAlgo?: boolean | null = null;
}
