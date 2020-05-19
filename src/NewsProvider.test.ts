import { NewsProvider } from './NewsProvider';

test('NewsProvider::constructor', () => {
  let f = new NewsProvider();
  expect(f.ProviderCode).toBe('');
  expect(f.ProviderName).toBe('');

  f = new NewsProvider('abc', 'def');
  expect(f.ProviderCode).toBe('abc');
  expect(f.ProviderName).toBe('def');
});
