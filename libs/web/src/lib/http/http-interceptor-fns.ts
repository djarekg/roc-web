import { HttpInterceptorFn } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const HTTP_INTERCEPTOR_FNS = new InjectionToken<HttpInterceptorFn[]>(
  'HTTP_INTERCEPTOR_FNS'
);
