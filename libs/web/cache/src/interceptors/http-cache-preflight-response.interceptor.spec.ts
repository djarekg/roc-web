import { TestBed } from '@angular/core/testing';

import { HttpCachePreflightResponseInterceptor } from './http-cache-preflight-response.interceptor';

describe('HttpCachePreflightResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpCachePreflightResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpCachePreflightResponseInterceptor = TestBed.inject(HttpCachePreflightResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
