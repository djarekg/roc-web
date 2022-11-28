import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable, map, take } from 'rxjs';

import { authApiActions } from '../../store/actions';
import { selectIsAuthenticated } from '../../store/reducers';

export const canActivate = (): Observable<boolean> => {
  const store = inject(Store);

  return store.select(selectIsAuthenticated).pipe(
    take(1),
    map(isAuthenticated => {
      if (!isAuthenticated) {
        store.dispatch(authApiActions.signinRedirect());
      }

      return isAuthenticated;
    })
  );
};
