import {
  type HttpEvent,
  type HttpHandlerFn,
  type HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { CORE_OPTIONS } from '@roc-web/core/options';
import { type Observable } from 'rxjs';

export const HTTP_BASE_URL_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const options = inject(CORE_OPTIONS);
  const baseUrl = options.apiUrl;

  if (!!baseUrl && typeof baseUrl === 'string') {
    req = req.clone({
      url: `${baseUrl}/${req.url.replace(/^\//, '')}`,
    });
  }

  return next(req);
};
