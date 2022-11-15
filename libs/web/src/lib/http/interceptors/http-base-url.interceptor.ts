import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

import { CORE_OPTIONS } from '@roc-web/core';

export const HTTP_BASE_URL_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const options = inject(CORE_OPTIONS);
  const baseUrl = options.apiUrl;

  if (baseUrl) {
    req = req.clone({
      url: `${baseUrl}/${req.url.replace(/^\//, '')}`,
    });
  }

  return next(req);
};
