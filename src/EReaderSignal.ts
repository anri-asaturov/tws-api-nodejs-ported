/**
 * @brief Notifies the thread reading information from the TWS whenever there are messages ready to be consumed. Not currently used in Python API.
 */
export interface EReaderSignal {
  /**
   * @brief Issues a signal to the consuming thread when there are things to be consumed.
   */
  issueSignal(): void;

  /**
   * @brief Makes the consuming thread waiting until a signal is issued.
   */
  waitForSignal(): Promise<void>;
}
