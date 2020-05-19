export class EMessage {
  public constructor(private buf = new Uint8Array()) {}

  GetBuf() {
    return this.buf;
  }
}
