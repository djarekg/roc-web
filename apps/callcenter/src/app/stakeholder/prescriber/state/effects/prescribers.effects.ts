import { inject, Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, mergeMap, of } from 'rxjs';

import { PrescriberService } from '@roc-web/callcenter/stakeholder/prescriber/services';

import { Store } from '@ngrx/store';
import {
  prescriberDetailPageActions,
  prescriberExistsGuardActions,
  prescribersApiActions,
  prescribersPageActions,
} from '../actions';
import { selectPagination, selectSort } from '../reducers';

@Injectable()
export class PrescribersEffects {
  readonly #actions$ = inject(Actions);
  readonly #prescriberService = inject(PrescriberService);
  readonly #store = inject(Store);

  addPrescriber$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberDetailPageActions.addPrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.add(prescriber).pipe(
          map(() => prescribersApiActions.addPrescriberSuccess({ prescriber })),
          catchError(error =>
            of(prescribersApiActions.addPrescriberFailure({ error }))
          )
        )
      )
    );
  });

  loadPrescriber$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberExistsGuardActions.loadPrescriber),
      exhaustMap(({ id }) =>
        this.#prescriberService.get(id).pipe(
          map(
            prescriber =>
              prescribersApiActions.loadPrescriberSuccess({ prescriber }),
            catchError(error =>
              of(prescribersApiActions.loadPrescriberFailure({ error }))
            )
          )
        )
      )
    );
  });

  loadPrescribers$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(
        prescribersPageActions.loadPrescribers,
        prescribersPageActions.changePage,
        prescribersPageActions.sortPage,
        prescribersApiActions.addPrescriberSuccess,
        prescribersApiActions.updatePrescriberSuccess,
        prescribersApiActions.removePrescriberSuccess
      ),
      concatLatestFrom(() => [
        this.#store.select(selectPagination),
        this.#store.select(selectSort),
      ]),
      concatMap(([, pagination, sort]) =>
        this.#prescriberService.getAll(pagination, sort).pipe(
          map(response =>
            prescribersApiActions.loadPrescribersSuccess(response)
          ),
          catchError(error =>
            of(prescribersApiActions.loadPrescribersFailure({ error }))
          )
        )
      )
    );
  });

  removePrescriber$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberDetailPageActions.removePrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.remove(prescriber).pipe(
          map(() => prescribersApiActions.removePrescriberSuccess()),
          catchError(error =>
            of(prescribersApiActions.removePrescriberFailure({ error }))
          )
        )
      )
    );
  });

  updatePrescriber$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberDetailPageActions.updatePrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.update(prescriber).pipe(
          map(() => prescribersApiActions.updatePrescriberSuccess()),
          catchError(error =>
            of(prescribersApiActions.updatePrescriberFailure({ error }))
          )
        )
      )
    );
  });
}
