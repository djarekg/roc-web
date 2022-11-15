import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Service to manager HTTP request caching.
 *
 * @export
 * @class HttpRequestCacheService
 */
@Injectable({
  providedIn: 'root',
})
export class HttpRequestCacheService {
  readonly #requests: Record<string, Observable<HttpEvent<unknown>>> = {};

  /**
   * Check if the request is cached.
   *
   * @param request - The request that we want to check if it's in the cache.
   * @returns A boolean value.
   */
  has(request: HttpRequest<unknown>): boolean {
    return this.key(request) in this.#requests;
  }

  /**
   * Get the request from the cache.
   *
   * @param request - HttpRequest<unknown>
   * @returns An observable of the request.
   */
  get(request: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
    return this.#requests[this.key(request)];
  }

  /**
   * Add the request's response to the cache.
   *
   * @param request - The request that was made.
   * @param response - Observable<HttpEvent<unknown>>
   */
  set(request: HttpRequest<unknown>, response: Observable<HttpEvent<unknown>>): void {
    this.#requests[this.key(request)] = response;
  }

  /**
   * Delete request from cache.
   *
   * @param request - HttpRequest<unknown>
   */
  delete(request: HttpRequest<unknown>): void {
    delete this.#requests[this.key(request)];
  }

  /**
   * Create a string that uniquely identifies the request
   *
   * @param request - HttpRequest<unknown>
   * @returns The url and the response type as a key.
   */
  private key(request: HttpRequest<unknown>): string {
    return [request.urlWithParams, request.responseType].join('#');
  }
}
