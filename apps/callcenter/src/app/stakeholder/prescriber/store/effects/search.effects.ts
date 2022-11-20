import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { isNullOrEmpty } from '@roc-web/core';
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

import { PrescriberService } from '@roc-web/callcenter/stakeholder/prescriber/services';

import { findPrescriberPageActions, prescribersApiActions } from '../actions';

@Injectable()
export class SearchEffects {
  readonly #actions$ = inject(Actions);
  readonly #prescriberService = inject(PrescriberService);

  search$ = createEffect(
    () =>
      ({ debounce = 300, scheduler = asyncScheduler } = {}) => {
        return this.#actions$.pipe(
          ofType(findPrescriberPageActions.searchPrescribers),
          debounceTime(debounce, scheduler),
          switchMap(({ filter }) => {
            if (isNullOrEmpty(filter)) {
              return EMPTY;
            }

            const nextSearch$ = this.#actions$.pipe(
              ofType(findPrescriberPageActions.searchPrescribers),
              skip(1)
            );

            return this.#prescriberService.search(filter).pipe(
              takeUntil(nextSearch$),
              map(response =>
                prescribersApiActions.searchSuccess({ response })
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
