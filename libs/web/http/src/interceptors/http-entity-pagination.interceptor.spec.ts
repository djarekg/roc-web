import { TestBed } from '@angular/core/testing';

import { HttpEntityPaginationInterceptor } from './http-entity-pagination.interceptor';

describe('HttpEntityPaginationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpEntityPaginationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpEntityPaginationInterceptor = TestBed.inject(HttpEntityPaginationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
