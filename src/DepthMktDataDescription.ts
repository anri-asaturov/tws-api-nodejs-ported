/**
 * @brief A class for storing depth market data description
 */
export class DepthMktDataDescription {
  public constructor(
    public Exchange = '',
    public SecType = '',
    public ListingExch = '',
    public ServiceDataType = '',
    public AggGroup = 0
  ) {}
}
