import { type HttpInterceptorFn } from '@angular/common/http';

import { HTTP_AUTH_INTERCEPTOR } from '.';

export function provideAuthInterceptors(): HttpInterceptorFn[] {
  const interceptorFns: HttpInterceptorFn[] = [HTTP_AUTH_INTERCEPTOR];

  return interceptorFns;
}
