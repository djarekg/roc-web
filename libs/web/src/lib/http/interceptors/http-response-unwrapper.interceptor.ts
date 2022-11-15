import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Outcome } from '../models';

export const HTTP_RESPONSE_UNWRAPPER_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  return next(req).pipe(
    map(response => {
      if (isHttpOutcomeResponse(response)) {
        return response.clone({ body: response.body?.value });
      }

      return response;
    })
  );
};

function isHttpOutcomeResponse(
  response: HttpEvent<unknown>
): response is HttpResponse<Outcome> {
  return response instanceof HttpResponse && response instanceof Outcome;
}
