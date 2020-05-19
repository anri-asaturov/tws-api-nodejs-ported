export interface EClientMsgSink {
  serverVersion(version: number, time: string): void;
  redirect(host: string): void;
}
