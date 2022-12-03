import { inject } from '@angular/core';
import { type ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { type Observable, filter, first, tap } from 'rxjs';

import { prescriberExistsGuardActions } from '../store/actions';
import { selectSelectedLoaded } from '../store/reducers';

export const canActivate = (
  route: ActivatedRouteSnapshot
): Observable<boolean> => {
  const store = inject(Store);
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
