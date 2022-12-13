import { Injectable, inject } from '@angular/core';
import { type Observable, of, switchMap } from 'rxjs';

import { type TokenResponse } from '../models';
import { hasRole } from '../utils';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #tokenService = inject(TokenService);

  signin(userName: string, password: string): Observable<TokenResponse> {
    return this.#tokenService.requestToken(userName, password);
  }

  hasRoleOrDefault(role: string | undefined): Observable<boolean> {
    if (role) {
      return this.hasRole(role).pipe(
        switchMap(hasRole => of(hasRole || false)),
      );
    }

    return of(true);
  }

  hasRole(role: string | undefined): Observable<boolean> {
    if (role) {
      return this.#tokenService.token$.pipe(
        switchMap(token => of(hasRole(role, token))),
      );
    }

    return of(false);
  }
}
