import { createHash } from 'crypto';

const HashAlgo = 'sha256';
const HashDigest = 'hex';

export function getStringHashCode(s = ''): string {
  return createHash(HashAlgo).update(s).digest(HashDigest);
}

export function getHashCode(...rest: Array<string | number | boolean | null | undefined>) {
  const hash = createHash(HashAlgo);
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === null || rest[i] === undefined) {
      hash.update('');
    } else {
      hash.update(String(rest[i]));
    }
  }
  return hash.digest(HashDigest);
}
