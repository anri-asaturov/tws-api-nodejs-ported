export class BitMask {
  constructor(private m_mask = 0) {}

  GetMask() {
    return this.m_mask;
  }

  Clear() {
    this.m_mask = 0;
  }

  getItem(index: number) {
    if (index >= 32) {
      throw new Error('Index out of range');
    }

    return (this.m_mask & (1 << index)) != 0;
  }

  setItem(index: number, value: boolean) {
    if (index >= 32) {
      throw new Error('Index out of range');
    }

    if (value) {
      this.m_mask |= 1 << index;
    } else {
      this.m_mask &= ~(1 << index);
    }
  }
}
