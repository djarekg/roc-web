import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerRequestAction } from '@ngrx/router-store';
import { tap } from 'rxjs';

import { routeProgressActions } from '../actions';

@Injectable()
export class RouteProgressEffects {
  readonly #actions$ = inject(Actions);

  started$ = createEffect(
    () => {
      return this.#actions$.pipe(
        ofType(routerRequestAction),
        tap(() => routeProgressActions.navigationStarted()),
      );
    },
    {
      dispatch: false,
    },
  );

  completed$ = createEffect(
    () => {
      return this.#actions$.pipe(
        ofType(routerRequestAction),
        tap(() => routeProgressActions.navigationCompleted()),
      );
    },
    {
      dispatch: false,
    },
  );
}
