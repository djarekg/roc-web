import { inject, Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { isNullOrEmpty } from '@roc-web/core';
import {
  asyncScheduler,
  catchError,
  concatMap,
  debounceTime,
  EMPTY,
  map,
  mergeMap,
  of,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs';

import { PrescriberService } from '@roc-web/callcenter/stakeholder/prescriber/services';

import { Store } from '@ngrx/store';
import {
  findPrescriberPageActions,
  prescribersApiActions,
  prescribersPageActions,
  selectedPrescriberPageActions,
} from '../actions';
import { selectPaginationOptions } from '../reducers';

@Injectable()
export class PrescribersEffects {
  readonly #actions$ = inject(Actions);
  readonly #prescriberService = inject(PrescriberService);
  readonly #store = inject(Store);

  load$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(
        prescribersPageActions.enter,
        prescribersApiActions.addPrescriberSuccess,
        prescribersApiActions.updatePrescriberSuccess,
        prescribersApiActions.removePrescriberSuccess
      ),
      concatLatestFrom(() => this.#store.select(selectPaginationOptions)),
      concatMap(([, options]) =>
        this.#prescriberService.get(options).pipe(
          map(response =>
            prescribersApiActions.loadPrescriberSuccess({ response })
          ),
          catchError(error =>
            of(prescribersApiActions.loadPrescriberFailure({ error }))
          )
        )
      )
    );
  });

  add$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(selectedPrescriberPageActions.addPrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.add(prescriber).pipe(
          map(() => prescribersApiActions.addPrescriberSuccess()),
          catchError(prescriber =>
            of(prescribersApiActions.addPrescriberFailure({ prescriber }))
          )
        )
      )
    );
  });

  remove$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(selectedPrescriberPageActions.removePrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.remove(prescriber).pipe(
          map(() => prescribersApiActions.removePrescriberSuccess()),
          catchError(prescriber =>
            of(prescribersApiActions.removePrescriberFailure({ prescriber }))
          )
        )
      )
    );
  });

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

  update$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(selectedPrescriberPageActions.updatePrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.update(prescriber).pipe(
          map(() => prescribersApiActions.updatePrescriberSuccess()),
          catchError(prescriber =>
            of(prescribersApiActions.updatePrescriberFailure({ prescriber }))
          )
        )
      )
    );
  });
}
