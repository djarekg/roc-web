import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, first, Observable, tap } from 'rxjs';

import { prescribersGuardActions } from '../store/actions';
import { selectLoaded } from '../store/reducers';

export const canActivate = (): Observable<boolean> => {
  const store = inject(Store);

  return store.select(selectLoaded).pipe(
    tap(isLoaded => {
      if (!isLoaded) {
        store.dispatch(prescribersGuardActions.loadPrescribers());
      }
    }),
    filter(isLoaded => isLoaded),
    first()
  );
};
