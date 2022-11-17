import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenResponse } from '../models';
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
