import { type HttpInterceptorFn } from '@angular/common/http';

import { HTTP_CACHE_INTERCEPTOR } from './interceptors';

export function provideHttpCacheInterceptors(): HttpInterceptorFn[] {
  const interceptorFns: HttpInterceptorFn[] = [HTTP_CACHE_INTERCEPTOR];

  return interceptorFns;
}
