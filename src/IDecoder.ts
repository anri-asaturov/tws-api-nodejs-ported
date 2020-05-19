export interface IDecoder {
  ReadDouble(): number;
  ReadDoubleMax(): number;
  ReadLong(): number;
  ReadInt(): number;
  ReadIntMax(): number;
  ReadBoolFromInt(): number;
  ReadString(): number;
}
