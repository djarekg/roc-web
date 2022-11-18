/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { Roles, RouteUrl } from '../../models';
import { AuthService } from '../../services';
import { hasRole } from '../../utils';
import { authActions, authApiActions, signinPageActions } from '../actions';

@Injectable()
export class AuthEffects {
  readonly #actions$ = inject(Actions);
  readonly #authService = inject(AuthService);
  readonly #router = inject(Router);

  signin$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(signinPageActions.signin),
      mergeMap(({ userName, password }) =>
        this.#authService.signin(userName, password).pipe(
          map(({ token, user }) =>
            authApiActions.signinSuccess({ token, user })
          ),
          catchError(error => of(authApiActions.signinFailure({ error })))
        )
      )
    )
  );

  signinSuccess$ = createEffect(
    () =>
      this.#actions$.pipe(
        ofType(authApiActions.signinSuccess),
        map(({ token, user }) => {
          authActions.setUser({ user });

          const isAdministrator = hasRole(Roles.administrator, token);
          const relativeUrl = isAdministrator ? RouteUrl.settingsAccount : '';

          return this.#router.navigate([relativeUrl]);
        })
      ),
    { dispatch: false }
  );

  signinRedirect$ = createEffect(
    () =>
      this.#actions$.pipe(
        ofType(authApiActions.signinRedirect),
        map(() => this.#router.navigate([RouteUrl.signin]))
      ),
    { dispatch: false }
  );

  signoutRedirect$ = createEffect(
    () =>
      this.#actions$.pipe(
        ofType(authActions.signout),
        map(() => this.#router.navigate([RouteUrl.signin]))
      ),
    { dispatch: false }
  );
}
