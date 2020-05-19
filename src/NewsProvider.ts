/**
 * @brief Class describing news provider
 * @sa EClient::reqNewsProviders, EWrapper::newsProviders
 */
export class NewsProvider {
  public constructor(public ProviderCode = '', public ProviderName = '') {}
}
