/**
 * @brief Class describing family code
 * @sa EClient::reqFamilyCodes, EWrapper::familyCodes
 */
export class FamilyCode {
  public constructor(public AccountID = '', public FamilyCodeStr = '') {}
}
