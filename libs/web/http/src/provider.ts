import { type HttpInterceptorFn } from '@angular/common/http';

import {
  HTTP_BASE_URL_INTERCEPTOR,
  HTTP_ENTITY_PAGINATION_INTERCEPTOR,
  HTTP_ERROR_INTERCEPTOR,
  HTTP_RESPONSE_UNWRAP_INTERCEPTOR,
} from './interceptors';

export function provideHttpInterceptors(): HttpInterceptorFn[] {
  const interceptorFns: HttpInterceptorFn[] = [
    HTTP_BASE_URL_INTERCEPTOR,
    HTTP_ERROR_INTERCEPTOR,
    HTTP_ENTITY_PAGINATION_INTERCEPTOR,
    HTTP_RESPONSE_UNWRAP_INTERCEPTOR,
  ];

  return interceptorFns;
}
