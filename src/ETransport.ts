import { EMessage } from './EMessage';

export interface ETransport {
  Send(msg: EMessage): void;
}
