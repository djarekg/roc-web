import { TestBed } from '@angular/core/testing';

import { authCanActivate } from './auth-can-activate.guard';

describe('authCanActivate', () => {
  let guard: typeof authCanActivate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(authCanActivate);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
