export function compareStrings(a: string, b: string, ignoreCase = false) {
  return (a || '').localeCompare(b || '', undefined, {
    sensitivity: ignoreCase ? 'base' : 'variant'
  });
}

export function isNullOrWhiteSpace(input: string) {
  return !input || !input.trim();
}
