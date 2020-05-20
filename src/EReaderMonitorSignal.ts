/**
 * PORTING NOTE:
 *      We don't really have threads and Monitor in javascript (WebWorkers don't count),
 *      so we're going to use async implementation.
 */

import { EReaderSignal } from './EReaderSignal';

export class EReaderMonitorSignal implements EReaderSignal {
  queue: Array<() => void> = [];

  issueSignal() {
    this.queue.forEach(resolve => resolve());
    this.queue.length = 0;
  }

  waitForSignal() {
    return new Promise<void>(resolve => this.queue.push(resolve));
  }
}
