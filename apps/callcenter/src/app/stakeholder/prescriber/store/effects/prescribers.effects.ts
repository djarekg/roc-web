import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RouteAction, parseActionEvent, toastActions } from '@roc-web/core';
import { type ToastOptions } from 'libs/core/src/lib/toast';
import { catchError, concatMap, exhaustMap, map, mergeMap, of, switchMap, tap } from 'rxjs';

import { PRESCRIBER_ROUTE_DEFAULT } from '../../constants';
import { PrescriberService } from '../../services';
import {
  prescriberDetailPageActions,
  prescriberExistsGuardActions,
  prescribersApiActions,
  prescribersPageActions,
} from '../actions';
import { selectFilter, selectPagination, selectSort } from '../selectors';

@Injectable()
export class PrescribersEffects {
  readonly #actions$ = inject(Actions);
  readonly #router = inject(Router);
  readonly #prescriberService = inject(PrescriberService);
  readonly #store = inject(Store);

  addPrescriber$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberDetailPageActions.addPrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.add(prescriber).pipe(
          map(() => prescribersApiActions.addPrescriberSuccess({ prescriber })),
          catchError(error => of(prescribersApiActions.addPrescriberFailure({ error }))),
        ),
      ),
    );
  });

  editPrescriber$ = createEffect(
    () => {
      return this.#actions$.pipe(
        ofType(prescribersPageActions.editPrescriber),
        tap(
          ({ id }) =>
            void this.#router.navigate([
              'prescriber',
              id,
              PRESCRIBER_ROUTE_DEFAULT,
              RouteAction.edit,
            ]),
        ),
      );
    },
    { dispatch: false },
  );

  failure$ = createEffect(
    () => {
      return this.#actions$.pipe(
        ofType(
          prescribersApiActions.addPrescriberFailure,
          prescribersApiActions.loadPrescriberFailure,
          prescribersApiActions.loadPrescribersFailure,
          prescribersApiActions.removePrescriberFailure,
          prescribersApiActions.updatePrescriberFailure,
        ),
        switchMap(({ type }) => of(parseActionEvent(type))),
        tap(message => {
          const options: ToastOptions = { message, title: 'error' };
          this.#store.dispatch(toastActions.error({ options }));
        }),
      );
    },
    { dispatch: false },
  );

  loadPrescriber$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberExistsGuardActions.loadPrescriber),
      exhaustMap(({ id }) =>
        this.#prescriberService.get(id).pipe(
          map(
            prescriber => prescribersApiActions.loadPrescriberSuccess({ prescriber }),
            catchError(error => of(prescribersApiActions.loadPrescriberFailure({ error }))),
          ),
        ),
      ),
    );
  });

  loadPrescribers$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(
        prescribersApiActions.addPrescriberSuccess,
        prescribersApiActions.removePrescriberSuccess,
        prescribersApiActions.updatePrescriberSuccess,
        prescribersPageActions.changePage,
        prescribersPageActions.filterChange,
        prescribersPageActions.loadPrescribers,
        prescribersPageActions.sortPage,
      ),
      concatLatestFrom(() => [
        this.#store.select(selectFilter),
        this.#store.select(selectPagination),
        this.#store.select(selectSort),
      ]),
      concatMap(([, filter, pagination, sort]) =>
        this.#prescriberService.getAll(filter, pagination, sort).pipe(
          map(response => prescribersApiActions.loadPrescribersSuccess(response)),
          catchError(error => of(prescribersApiActions.loadPrescribersFailure({ error }))),
        ),
      ),
    );
  });

  removePrescriber$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberDetailPageActions.removePrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.remove(prescriber).pipe(
          map(() => prescribersApiActions.removePrescriberSuccess()),
          catchError(error => of(prescribersApiActions.removePrescriberFailure({ error }))),
        ),
      ),
    );
  });

  updatePrescriber$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberDetailPageActions.updatePrescriber),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.update(prescriber).pipe(
          map(() => prescribersApiActions.updatePrescriberSuccess()),
          catchError(error => of(prescribersApiActions.updatePrescriberFailure({ error }))),
        ),
      ),
    );
  });

  viewPrescriber$ = createEffect(
    () => {
      return this.#actions$.pipe(
        ofType(prescribersPageActions.viewPrescriber),
        tap(
          ({ id }) =>
            void this.#router.navigate([
              'prescriber',
              id,
              PRESCRIBER_ROUTE_DEFAULT,
              RouteAction.view,
            ]),
        ),
      );
    },
    { dispatch: false },
  );
}
