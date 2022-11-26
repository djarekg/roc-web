import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Observable, switchMap } from 'rxjs';

import { selectBearerToken } from '../state';

export const HTTP_AUTH_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const store = inject(Store);

  return store.select(selectBearerToken).pipe(
    first(),
    switchMap(bearerToken => {
      if (bearerToken) {
        req = req.clone({ setHeaders: { Authorization: bearerToken } });
      }

      return next(req);
    })
  );
};
