import { Injectable, inject } from '@angular/core';
import { type Observable } from 'rxjs';

import { type TokenResponse } from '../models';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #tokenService = inject(TokenService);

  signin(userName: string, password: string): Observable<TokenResponse> {
    return this.#tokenService.requestToken(userName, password);
  }
}
