import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, Observable, tap } from 'rxjs';

import { prescriberExistsGuardActions } from '../state/actions';
import { selectSelectedLoaded } from '../state/reducers';

export const canActivate = (): Observable<boolean> => {
  const store = inject(Store);
  const route = inject(ActivatedRouteSnapshot);
  const id = route.params['id'];

  return store.select(selectSelectedLoaded).pipe(
    tap(isLoaded => {
      if (!isLoaded) {
        store.dispatch(prescriberExistsGuardActions.loadPrescriber({ id }));
      }
    }),
    filter(isLoaded => isLoaded),
    first()
  );
};
