import {
  type HttpEvent,
  type HttpHandlerFn,
  type HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { CORE_OPTIONS } from '@roc-web/core';
import { type Observable } from 'rxjs';

export const HTTP_BASE_URL_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const options = inject(CORE_OPTIONS);
  // TODO: explicitly set type as string to avoid type error
  // until satisfies operator is available in TypeScript 4.9
  const baseUrl: string = options.apiUrl ?? '';

  req = req.clone({
    url: `${baseUrl}/${req.url.replace(/^\//, '')}`,
  });

  return next(req);
};
