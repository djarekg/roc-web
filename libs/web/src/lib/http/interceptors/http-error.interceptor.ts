import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Outcome } from '../models';
import { SKIP_ERROR_INTERCEPTOR_HEADER } from '../models/skip-error-interceptor-header';

export const HTTP_ERROR_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  if (req.headers.has(SKIP_ERROR_INTERCEPTOR_HEADER)) {
    const headers = req.headers.delete(SKIP_ERROR_INTERCEPTOR_HEADER);
    return next(req.clone({ headers }));
  }

  return next(req).pipe(
    catchError((response: HttpErrorResponse) => {
      console.error(response);

      if (response instanceof Outcome) {
        return throwError(() => response);
      }

      if (response instanceof HttpErrorResponse && response.status === 400) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const outcome: Outcome = { ...new Outcome(), ...response.error };
        return throwError(() => outcome);
      }

      const outcome: Outcome = {
        ...new Outcome(),
        failure: true,
        success: false,
        messages: ['An error occurred when executing your req.'],
      };

      return throwError(() => outcome);
    })
  );
};
