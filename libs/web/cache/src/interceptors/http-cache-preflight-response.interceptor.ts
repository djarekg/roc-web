import {
  type HttpEvent,
  type HttpHandlerFn,
  type HttpRequest,
} from '@angular/common/http';
import { type Observable } from 'rxjs';

import { ACCESS_CONTROL_MAX_AGE } from '../constants';

export const HTTP_CACHE_PREFLIGHT_RESPONSE_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  if (req.method === 'OPTIONS') {
    req = req.clone({
      headers: req.headers.set(
        'Access-Control-Max-Age',
        `${ACCESS_CONTROL_MAX_AGE}`,
      ),
    });
  }

  return next(req);
};
