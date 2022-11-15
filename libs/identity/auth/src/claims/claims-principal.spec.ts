import { ClaimsPrincipal } from './claims-principal';

describe('ClaimsPrincipal', () => {
  it('should create an instance', () => {
    expect(new ClaimsPrincipal({})).toBeTruthy();
  });
});
