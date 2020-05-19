/**
 * @brief Defines a market scanner request
 */
export class ScannerSubscription {
  numberOfRows = -1;
  instrument = '';
  locationCode = '';
  scanCode = '';
  abovePrice = Number.MAX_VALUE;
  belowPrice = Number.MAX_VALUE;
  aboveVolume = Number.MAX_SAFE_INTEGER;
  averageOptionVolumeAbove = Number.MAX_SAFE_INTEGER;
  marketCapAbove = Number.MAX_VALUE;
  marketCapBelow = Number.MAX_VALUE;
  moodyRatingAbove = '';
  moodyRatingBelow = '';
  spRatingAbove = '';
  spRatingBelow = '';
  maturityDateAbove = '';
  maturityDateBelow = '';
  couponRateAbove = Number.MAX_VALUE;
  couponRateBelow = Number.MAX_VALUE;
  excludeConvertible = false;
  scannerSettingPairs = '';
  stockTypeFilter = '';
}
