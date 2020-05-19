import { CodeMsgPair } from './EClientErrors';

export class EClientException extends Error {
  constructor(public Err: CodeMsgPair) {
    super(Err.Message);
  }
}
