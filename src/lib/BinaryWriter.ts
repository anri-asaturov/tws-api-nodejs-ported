import { OutgoingMessages } from '../OutgoingMessages';
import { Contract } from '../Contract';
import { Constants } from '../Constants';
import { TagValue } from '../TagValue';
import { List, TagValueList } from './List';
import { TagValueListToString } from '../Util';

const BLOCK_SIZE = 1024;

export class BinaryWriter {
  buffer = new Uint8Array(BLOCK_SIZE);
  pos = 0;

  Write(data: ArrayLike<number>) {
    if (this.buffer.length < this.pos + data.length) {
      const newBuf = new Uint8Array(this.buffer.length + BLOCK_SIZE);
      newBuf.set(this.buffer);
      this.buffer = newBuf;
    }
    this.buffer.set(data, this.pos);
    this.pos += data.length;
  }

  // PORT NOTE: This returns a shallow copy of the buffer (or a portion of it), contrary to MemoryStream implementation.
  // But it shouldn't affect the logic.
  getBuffer() {
    return this.buffer.slice(0, this.pos);
  }

  AddParameter(value: string): void;
  AddParameter(value: number): void;
  AddParameter(value: boolean): void;
  AddParameter(msgId: OutgoingMessages): void;
  AddParameter(value: Contract): void;
  AddParameter(options: List<TagValue>): void;

  AddParameter(val: any): void {
    // covers both null and undefined
    if (val == null) {
      this.Write(Constants.EOL);
      return;
    }
    switch (typeof val) {
      case 'object':
        if (val instanceof Contract) {
          this.AddContractParameter(val);
        } else if (val instanceof TagValueList) {
          this.AddTagValueListParameter(val);
        }
        break;

      case 'string':
        this.Write(Buffer.from(val, 'utf8'));
        this.Write(Constants.EOL);
        break;

      case 'number':
        this.AddParameter(val.toString());
        break;

      case 'boolean':
        this.AddParameter(val ? '1' : '0');
        break;

      case 'undefined':
        this.Write(Constants.EOL);
        break;
      default:
        console.error(val);
        throw new Error('Unknown data type.');
    }
  }

  AddContractParameter(value: Contract) {
    this.AddParameter(value.ConId);
    this.AddParameter(value.Symbol);
    this.AddParameter(value.SecType);
    this.AddParameter(value.LastTradeDateOrContractMonth);
    this.AddParameter(value.Strike);
    this.AddParameter(value.Right);
    this.AddParameter(value.Multiplier);
    this.AddParameter(value.Exchange);
    this.AddParameter(value.PrimaryExch);
    this.AddParameter(value.Currency);
    this.AddParameter(value.LocalSymbol);
    this.AddParameter(value.TradingClass);
    this.AddParameter(value.IncludeExpired);
  }

  AddTagValueListParameter(options: TagValueList) {
    this.AddParameter(TagValueListToString(options));
  }

  AddParameterMax(value: number) {
    if (value == Number.MAX_VALUE) this.Write(Constants.EOL);
    else this.AddParameter(value);
  }
}
