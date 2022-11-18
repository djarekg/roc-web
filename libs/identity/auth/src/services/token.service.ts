import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { LocalStorageService } from '@roc-web/core';
import { Endpoints } from '@roc-web/identity';
import { Outcome, SKIP_ERROR_INTERCEPTOR_HEADER } from '@roc-web/web';

import {
  INCORRECT_CREDENTIALS_REGEX,
  REQUEST_TOKEN_ERROR_MESSAGE,
} from '../constants';
import {
  DecodedToken,
  HttpCacheKey,
  HttpTokenResponse,
  ResponseTokenError,
  TokenResponse,
  TokenUser,
} from '../models';
import { decode, parseUser } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  readonly #http = inject(HttpClient);
  readonly #storage = inject(LocalStorageService);

  get decodedToken(): DecodedToken | null {
    const token = this.token;

    if (!token) {
      return null;
    }

    const decodedToken = decode<DecodedToken>(token);

    return decodedToken;
  }

  /**
   * If the token exists and is not expired.
   *
   * @readonly
   * @type {boolean} - True if the token is valid and false if it is not.
   */
  get isValid(): boolean {
    if (!this.token) {
      return false;
    }

    const expiration = this.#storage.get(HttpCacheKey.tokenExperation);

    if (!expiration) {
      return false;
    }

    const expirationPrimitive = +expiration;

    if (isNaN(expirationPrimitive)) {
      return false;
    }

    const nowPrimitive = Date.now().valueOf();
    return nowPrimitive < expirationPrimitive;
  }

  /**
   * Token stored in storage.
   *
   * @readonly
   * @type {(string | null)} - The JWT token.
   */
  get token(): string | null {
    return this.#storage.get(HttpCacheKey.token);
  }

  get tokenExperation(): string | null {
    return this.#storage.get(HttpCacheKey.tokenExperation);
  }

  /**
   * The stored token user.
   *
   * @readonly
   * @type {(TokenUser | null)}
   */
  get user(): TokenUser | null {
    return this.#storage.get<TokenUser>(HttpCacheKey.tokenUser);
  }
  // set user(value: TokenUser | null) {
  //   this.#storage.set(TOKEN_USER_KEY, value);
  // }

  /**
   * Get JWT token from API.
   *
   * @param {string} userName - The user name.
   * @param {string} password - The password.
   * @returns {*} {Observable<HttpTokenResponse>}
   */
  requestToken(userName: string, password: string): Observable<TokenResponse> {
    const headers = new HttpHeaders().set(SKIP_ERROR_INTERCEPTOR_HEADER, '');

    return this.#http
      .post<HttpTokenResponse>(
        Endpoints.token,
        {
          userName,
          password,
          token: null,
        },
        { headers }
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
        catchError(error => this.#handleRequestTokenError(error))
      );
  }

  /**
   * Store the token, expiration and user from the HTTP Token response in storage.
   *
   * @param {HttpTokenResponse} response The HTTP token response to store.
   */
  #storeTokenResponse(response: HttpTokenResponse): void {
    const { token, expiration } = response;

    this.#storeToken(token, expiration);
    // this.#storeUser(token);
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

  #storeToken(token: string, expiration: string): void {
    const expirationPrimitive = Date.parse(expiration).valueOf();

    this.#storage.set(HttpCacheKey.token, token);
    this.#storage.set(HttpCacheKey.tokenExperation, expirationPrimitive);
  }

  #storeUser(token: string): void {
    const user = parseUser(token);

    this.#storage.set(HttpCacheKey.tokenUser, user);
  }
}
