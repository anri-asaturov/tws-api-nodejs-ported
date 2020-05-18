/**
 * @brief The historical data bar's description.
 * @sa EClient, EWrapper
 */
export class Bar {
  constructor(
    public readonly Time: string,
    public readonly Open: number,
    public readonly High: number,
    public readonly Low: number,
    public readonly Close: number,
    public readonly Volume: number,
    public readonly Count: number,
    public readonly WAP: number
  ) {}
}
