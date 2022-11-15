/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

import { AuthService } from '../../services';
import { authActions, authApiActions, signinPageActions } from '../actions';

@Injectable()
export class AuthEffects {
  readonly #actions$ = inject(Actions);
  readonly #authService = inject(AuthService);
  readonly #router = inject(Router);
  // readonly #dialog = inject(MatDialog);

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
          authActions.setToken({ token });
          authActions.setUser({ user });
        }),
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        tap(() => this.#router.navigate(['/settings/account']))
      ),
    { dispatch: false }
  );

  signinRedirect$ = createEffect(
    () =>
      this.#actions$.pipe(
        ofType(authApiActions.signinRedirect, authActions.signout),
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        tap(() => this.#router.navigate(['/signin']))
      ),
    { dispatch: false }
  );

  //   signoutConfirmation$ = createEffect(() =>
  //     this.#actions$.pipe(
  //       ofType(AuthActions.signoutConfirmation),
  //       exhaustMap(() => {
  //         const dialogRef = this.#dialog.open<
  //           SignoutConfirmationDialogComponent,
  //           undefined,
  //           boolean
  //         >(SignoutConfirmationDialogComponent);

  //         return dialogRef.afterClosed();
  //       }),
  //       map(result =>
  //         result ? AuthActions.signout() : AuthActions.signoutConfirmationDismiss()
  //       )
  //     )
  //   );
}
