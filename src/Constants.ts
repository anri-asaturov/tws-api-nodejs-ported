import { MinServerVer } from './MinServerVer';

export class Constants {
  static ClientVersion = 66; //API v. 9.71
  static EOL = 0;
  static BagSecType = 'BAG';
  static REDIRECT_COUNT_MAX = 2;
  static FaGroups = 1;
  static FaProfiles = 2;
  static FaAliases = 3;
  static MinVersion = 100;
  static MaxVersion = MinServerVer.NO_DEFAULT_OPEN_CLOSE;
  static MaxMsgSize = 0x00ffffff;
}
