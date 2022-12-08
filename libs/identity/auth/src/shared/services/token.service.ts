import {
  HttpClient,
  type HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Endpoints } from '@roc-web/identity/shared';
import { SKIP_ERROR_INTERCEPTOR_HEADER } from '@roc-web/web/http';
import { type Outcome } from '@roc-web/web/shared';
import { type Observable, catchError, map, throwError } from 'rxjs';

import { selectToken } from '../../store';
import {
  INCORRECT_CREDENTIALS_REGEX,
  REQUEST_TOKEN_ERROR_MESSAGE,
} from '../constants';
import {
  type HttpTokenResponse,
  type ResponseTokenError,
  type TokenResponse,
} from '../models';
import { parseUser } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  readonly #http = inject(HttpClient);
  readonly #store = inject(Store);

  readonly token$ = this.#store.select(selectToken);

  requestToken(userName: string, password: string): Observable<TokenResponse> {
    const headers = new HttpHeaders().set(SKIP_ERROR_INTERCEPTOR_HEADER, '');

    return this.#http
      .post<HttpTokenResponse>(
        Endpoints.token,
        {
          password,
          token: null,
          userName,
        },
        { headers },
      )
      .pipe(
        map(response => {
          const { token } = response;
          const user = parseUser(token);

          return {
            token,
            user,
          };
        }),
        catchError(error => this.#handleRequestTokenError(error)),
      );
  }

  #handleRequestTokenError(error: HttpErrorResponse): Observable<never> {
    const outcome: Outcome = error.error;
    let errorMessages: string[] | null = null;

    if (outcome?.messages?.length) {
      const { messages } = outcome;

      if (messages.some(item => INCORRECT_CREDENTIALS_REGEX.test(item))) {
        errorMessages = [
          $localize`:{identity.incorrectCredentials}:Incorrect user name or password`,
        ];
      } else {
        errorMessages = [...messages];
      }
    }

    const tokenError: ResponseTokenError = {
      errorMessages,
      message: REQUEST_TOKEN_ERROR_MESSAGE,
    };

    return throwError(() => tokenError);
  }
}
