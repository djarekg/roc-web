import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

import { ToastService } from '../../toast/shared/services';
import { toastActions } from '../actions';

@Injectable()
export class ToastEffects {
  readonly #actions$ = inject(Actions);
  readonly #toastService = inject(ToastService);

  // show$ = createEffect(
  //   () => {
  //     return this.#actions$.pipe(
  //       ofType(toastActions.show),
  //       map(({ toast }) => {
  //         this.#toastService.show(toast);
  //       }),
  //     );
  //   },
  //   { dispatch: false },
  // );

  error$ = createEffect(
    () => {
      return this.#actions$.pipe(
        ofType(toastActions.error),
        map(({ options }) => this.#toastService.error(options)),
      );
    },
    { dispatch: false },
  );
}
