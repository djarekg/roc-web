import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';

import { authApiActions } from '../store/actions';
import * as fromAuth from '../store/reducers';

export const authCanActivate = (): Observable<boolean> => {
  const store = inject(Store);

  return store.select(fromAuth.selectIsAuthenticated).pipe(
    take(1),
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      }

      store.dispatch(authApiActions.signinRedirect());

      return false;
    })
  );
};
