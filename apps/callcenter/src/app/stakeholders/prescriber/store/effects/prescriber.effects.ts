import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  asyncScheduler,
  catchError,
  debounceTime,
  EMPTY,
  map,
  of,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs';

import { isNullOrEmpty } from '@roc-web/core';

import { PrescriberService } from '../../services';
import { findPrescriberPageActions, prescribersApiActions } from '../actions';

@Injectable()
export class PrescriberEffects {
  readonly #actions$ = inject(Actions);
  readonly #prescriberService = inject(PrescriberService);

  search$ = createEffect(
    () =>
      ({ debounce = 300, scheduler = asyncScheduler } = {}) => {
        return this.#actions$.pipe(
          ofType(findPrescriberPageActions.searchPrescribers),
          debounceTime(debounce, scheduler),
          switchMap(({ query }) => {
            if (isNullOrEmpty(query)) {
              return EMPTY;
            }

            const nextSearch$ = this.#actions$.pipe(
              ofType(findPrescriberPageActions.searchPrescribers),
              skip(1)
            );

            return this.#prescriberService.searchPrescribers(query).pipe(
              takeUntil(nextSearch$),
              map(prescribers =>
                prescribersApiActions.searchSuccess({ prescribers })
              ),
              catchError(error =>
                of(prescribersApiActions.searchFailure({ error }))
              )
            );
          })
        );
      }
  );
}
