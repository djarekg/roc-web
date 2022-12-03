import {
  type HttpEvent,
  type HttpHandlerFn,
  type HttpRequest,
} from '@angular/common/http';
import { type Observable, map } from 'rxjs';

import { isHttpValueOutcomeResponse } from '../utils';

export const HTTP_RESPONSE_UNWRAP_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  return next(req).pipe(
    map(resp => {
      if (isHttpValueOutcomeResponse(resp)) {
        return resp.clone({ body: resp.body?.value });
      }

      return resp;
    })
  );
};
