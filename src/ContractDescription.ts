import { Contract as ContractClass } from './Contract';

/**
 * @brief contract data and list of derivative security types
 * @sa Contract, EClient::reqMatchingSymbols, EWrapper::symbolSamples
 */
export class ContractDescription {
  public constructor(
    public Contract = new ContractClass(),
    public DerivativeSecTypes: string[] = []
  ) {}

  ToString() {
    return (
      this.Contract.ToString() + ' derivativeSecTypes [' + this.DerivativeSecTypes.join(', ') + ']'
    );
  }

  toString() {
    return this.ToString();
  }
}
