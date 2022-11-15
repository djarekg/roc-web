import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ClaimsPrincipal } from '../claims';
import { TokenUser } from '../models';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #tokenService = inject(TokenService);

  get isAuthenticated(): boolean {
    return this.#tokenService.isValid;
  }

  get claims(): ClaimsPrincipal | null {
    const decodedToken = this.#tokenService.decodedToken;

    if (decodedToken) {
      return new ClaimsPrincipal(decodedToken);
    }

    return null;
  }

  signin(
    userName: string,
    password: string
  ): Observable<{ token: string | null; user: TokenUser | null }> {
    return this.#tokenService.requestToken(userName, password);
  }
}
