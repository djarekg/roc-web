import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

import { toastActions } from '../actions';
import { ToastService } from '../services';

@Injectable()
export class ToastEffects {
  readonly #actions$ = inject(Actions);
  readonly #toastService = inject(ToastService);

  show$ = createEffect(
    () => {
      return this.#actions$.pipe(
        ofType(toastActions.show),
        map(({ toast }) => {
          this.#toastService.show(toast);
        }),
      );
    },
    { dispatch: false },
  );
}
