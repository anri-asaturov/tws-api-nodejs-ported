/**
 * @brief class containing all existing values being reported by EClientSocket::reqAccountSummary
 */
export class AccountSummaryTags {
  AccountType = 'AccountType';
  NetLiquidation = 'NetLiquidation';
  TotalCashValue = 'TotalCashValue';
  SettledCash = 'SettledCash';
  AccruedCash = 'AccruedCash';
  BuyingPower = 'BuyingPower';
  EquityWithLoanValue = 'EquityWithLoanValue';
  PreviousEquityWithLoanValue = 'PreviousEquityWithLoanValue';
  GrossPositionValue = 'GrossPositionValue';
  ReqTEquity = 'ReqTEquity';
  ReqTMargin = 'ReqTMargin';
  SMA = 'SMA';
  InitMarginReq = 'InitMarginReq';
  MaintMarginReq = 'MaintMarginReq';
  AvailableFunds = 'AvailableFunds';
  ExcessLiquidity = 'ExcessLiquidity';
  Cushion = 'Cushion';
  FullInitMarginReq = 'FullInitMarginReq';
  FullMaintMarginReq = 'FullMaintMarginReq';
  FullAvailableFunds = 'FullAvailableFunds';
  FullExcessLiquidity = 'FullExcessLiquidity';
  LookAheadNextChange = 'LookAheadNextChange';
  LookAheadInitMarginReq = 'LookAheadInitMarginReq';
  LookAheadMaintMarginReq = 'LookAheadMaintMarginReq';
  LookAheadAvailableFunds = 'LookAheadAvailableFunds';
  LookAheadExcessLiquidity = 'LookAheadExcessLiquidity';
  HighestSeverity = 'HighestSeverity';
  DayTradesRemaining = 'DayTradesRemaining';
  Leverage = 'Leverage';

  GetAllTags() {
    return (
      this.AccountType +
      ',' +
      this.NetLiquidation +
      ',' +
      this.TotalCashValue +
      ',' +
      this.SettledCash +
      ',' +
      this.AccruedCash +
      ',' +
      this.BuyingPower +
      ',' +
      this.EquityWithLoanValue +
      ',' +
      this.PreviousEquityWithLoanValue +
      ',' +
      this.GrossPositionValue +
      ',' +
      this.ReqTEquity +
      ',' +
      this.ReqTMargin +
      ',' +
      this.SMA +
      ',' +
      this.InitMarginReq +
      ',' +
      this.MaintMarginReq +
      ',' +
      this.AvailableFunds +
      ',' +
      this.ExcessLiquidity +
      ',' +
      this.Cushion +
      ',' +
      this.FullInitMarginReq +
      ',' +
      this.FullMaintMarginReq +
      ',' +
      this.FullAvailableFunds +
      ',' +
      this.FullExcessLiquidity +
      ',' +
      this.LookAheadNextChange +
      ',' +
      this.LookAheadInitMarginReq +
      ',' +
      this.LookAheadMaintMarginReq +
      ',' +
      this.LookAheadAvailableFunds +
      ',' +
      this.LookAheadExcessLiquidity +
      ',' +
      this.HighestSeverity +
      ',' +
      this.DayTradesRemaining +
      ',' +
      this.Leverage
    );
  }
}
