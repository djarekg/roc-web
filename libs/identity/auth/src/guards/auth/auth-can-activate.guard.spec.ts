import { TestBed } from '@angular/core/testing';

import { canActivate } from './auth-can-activate.guard';

describe('authCanActivate', () => {
  let guard: typeof canActivate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(canActivate);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
