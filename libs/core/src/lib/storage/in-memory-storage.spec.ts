import { InMemoryStorage } from './in-memory-storage';

describe('InMemoryStorage', () => {
  it('should create an instance', () => {
    expect(new InMemoryStorage()).toBeTruthy();
  });
});
