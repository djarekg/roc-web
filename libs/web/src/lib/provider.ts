import { type HttpInterceptorFn } from '@angular/common/http';

import { HTTP_CACHE_INTERCEPTOR } from './cache';
import {
  HTTP_BASE_URL_INTERCEPTOR,
  HTTP_ENTITY_PAGINATION_INTERCEPTOR,
  HTTP_ERROR_INTERCEPTOR,
  HTTP_RESPONSE_UNWRAP_INTERCEPTOR,
} from './http';

export function provideHttpInterceptors(): HttpInterceptorFn[] {
  const interceptorFns: HttpInterceptorFn[] = [
    HTTP_BASE_URL_INTERCEPTOR,
    HTTP_ERROR_INTERCEPTOR,
    HTTP_ENTITY_PAGINATION_INTERCEPTOR,
    HTTP_RESPONSE_UNWRAP_INTERCEPTOR,
    HTTP_CACHE_INTERCEPTOR,
  ];

  return interceptorFns;
}
