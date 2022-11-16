import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { isNullOrEmpty } from '@roc-web/core';
import {
  asyncScheduler,
  catchError,
  debounceTime,
  EMPTY,
  exhaustMap,
  map,
  mergeMap,
  of,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs';

import { PrescriberService } from '../../services';
import {
  findPrescriberPageActions,
  prescribersApiActions,
  prescribersPageActions,
  selectedPrescriberPageActions,
} from '../actions';

@Injectable()
export class PrescribersEffects {
  readonly #actions$ = inject(Actions);
  readonly #prescriberService = inject(PrescriberService);

  load$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(
        prescribersPageActions.enter,
        prescribersApiActions.addPrescriberSuccess,
        prescribersApiActions.updatePrescriberSuccess,
        prescribersApiActions.removePrescriberSuccess
      ),
      exhaustMap(() =>
        this.#prescriberService.get().pipe(
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
          switchMap(({ query }) => {
            if (isNullOrEmpty(query)) {
              return EMPTY;
            }

            const nextSearch$ = this.#actions$.pipe(
              ofType(findPrescriberPageActions.searchPrescribers),
              skip(1)
            );

            return this.#prescriberService.search(query).pipe(
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
