import { inject, Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';

import { PrescriberService } from '@roc-web/callcenter/stakeholder/prescriber/services';

import { Store } from '@ngrx/store';
import {
  collectionApiActions,
  collectionPageActions,
  selectedPrescriberPageActions,
} from '../actions';
import { selectPaginationAndSort } from '../reducers';

@Injectable()
export class CollectionEffects {
  readonly #actions$ = inject(Actions);
  readonly #prescriberService = inject(PrescriberService);
  readonly #store = inject(Store);

  add$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(selectedPrescriberPageActions.addPrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.add(prescriber).pipe(
          map(() => collectionApiActions.addPrescriberSuccess()),
          catchError(prescriber =>
            of(collectionApiActions.addPrescriberFailure({ prescriber }))
          )
        )
      )
    );
  });

  load$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(
        collectionPageActions.enter,
        collectionPageActions.changePage,
        collectionPageActions.sortPage,
        collectionApiActions.addPrescriberSuccess,
        collectionApiActions.updatePrescriberSuccess,
        collectionApiActions.removePrescriberSuccess
      ),
      concatLatestFrom(() => this.#store.select(selectPaginationAndSort)),
      concatMap(([, meta]) =>
        this.#prescriberService.get(meta.pagination, meta.sort).pipe(
          map(response => collectionApiActions.loadPrescriberSuccess(response)),
          catchError(error =>
            of(collectionApiActions.loadPrescriberFailure({ error }))
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
          map(() => collectionApiActions.removePrescriberSuccess()),
          catchError(prescriber =>
            of(collectionApiActions.removePrescriberFailure({ prescriber }))
          )
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(selectedPrescriberPageActions.updatePrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.update(prescriber).pipe(
          map(() => collectionApiActions.updatePrescriberSuccess()),
          catchError(prescriber =>
            of(collectionApiActions.updatePrescriberFailure({ prescriber }))
          )
        )
      )
    );
  });
}
