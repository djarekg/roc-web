import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';

import { Permission, RouteUrl } from '../models';
import { authApiActions } from '../store/actions';
import * as fromAuth from '../store/reducers';

export const authCanActivate = (): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(fromAuth.selectAuthenticatedUser).pipe(
    map(({ claims, isAuthenticated }) => {
      if (!!isAuthenticated) {
        const isAdministrator = claims?.permissions.includes(
          Permission.Administrator
        );
        const relativeUrl = isAdministrator
          ? RouteUrl.settings
          : RouteUrl.prescribers;

        void router.navigate([relativeUrl]);

        return true;
      }

      store.dispatch(authApiActions.signinRedirect());

      return false;
    }),
    take(1)
  );
};
