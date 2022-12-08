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

  hasRole(roles: string[] | string | undefined): Observable<boolean> {
    if (!roles) {
      return of(false);
    }

    return this.#tokenService.token$.pipe(
      switchMap(token =>
        of(Array.from(roles).some(role => hasRole(role, token))),
      ),
    );
  }
}
