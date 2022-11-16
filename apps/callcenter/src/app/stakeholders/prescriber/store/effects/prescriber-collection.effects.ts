import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

import { PrescriberService } from '../../services';
import {
  prescriberCollectionApiActions,
  prescriberCollectionPageActions,
  selectedPrescriberPageActions,
} from '../actions';

@Injectable()
export class PrescribersEffects {
  readonly #actions$ = inject(Actions);
  readonly #prescriberService = inject(PrescriberService);

  load$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(prescriberCollectionPageActions.enter),
      switchMap(({ options }) =>
        this.#prescriberService.getPrescribers(options).pipe(
          map(prescribers =>
            prescriberCollectionApiActions.loadSuccess({ prescribers })
          ),
          catchError(error =>
            of(prescriberCollectionApiActions.loadFailure({ error }))
          )
        )
      )
    );
  });

  add$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(selectedPrescriberPageActions.add),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.addPrescriber(prescriber).pipe(
          map(prescriber =>
            prescriberCollectionApiActions.addSuccess({ prescriber })
          ),
          catchError(prescriber =>
            of(prescriberCollectionApiActions.addFailure({ prescriber }))
          )
        )
      )
    );
  });

  remove$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(selectedPrescriberPageActions.remove),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.removePrescriber(prescriber).pipe(
          map(prescriber =>
            prescriberCollectionApiActions.removeSuccess({ prescriber })
          ),
          catchError(prescriber =>
            of(prescriberCollectionApiActions.removeFailure({ prescriber }))
          )
        )
      )
    );
  });

  update$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(selectedPrescriberPageActions.update),
      mergeMap(({ prescriber }) =>
        this.#prescriberService.updatePrescriber(prescriber).pipe(
          map(prescriber =>
            prescriberCollectionApiActions.updateSuccess({ prescriber })
          ),
          catchError(prescriber =>
            of(prescriberCollectionApiActions.updateFailure({ prescriber }))
          )
        )
      )
    );
  });
}
