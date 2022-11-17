/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { RouteUrl } from '../../models';
import { AuthService } from '../../services';
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
          map(({ claims, token, user }) =>
            authApiActions.signinSuccess({ claims, token, user })
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
        map(({ claims, token, user }) => {
          authActions.setClaims({ claims });
          authActions.setToken({ token });
          authActions.setUser({ user });
        }),
        map(() => this.#router.navigate([RouteUrl.settingsAccount]))
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
