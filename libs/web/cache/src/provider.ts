import { type HttpInterceptorFn } from '@angular/common/http';

import {
  HTTP_CACHE_INTERCEPTOR,
  HTTP_CACHE_PREFLIGHT_RESPONSE_INTERCEPTOR,
} from './interceptors';

export function provideHttpCacheInterceptors(): HttpInterceptorFn[] {
  const interceptorFns: HttpInterceptorFn[] = [
    HTTP_CACHE_PREFLIGHT_RESPONSE_INTERCEPTOR,
    HTTP_CACHE_INTERCEPTOR,
  ];

  return interceptorFns;
}
