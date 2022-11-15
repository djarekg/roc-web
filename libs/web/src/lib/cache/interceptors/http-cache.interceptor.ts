import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, Observable, shareReplay } from 'rxjs';

import { HttpRequestCacheService } from '../services';

export const HTTP_CACHE_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const cache = inject(HttpRequestCacheService);

  if (req.method !== 'GET') {
    return next(req);
  }

  if (!cache.has(req)) {
    const response = next(req).pipe(
      finalize(() => cache.delete(req)),
      shareReplay({ refCount: true, bufferSize: 1 })
    );

    cache.set(req, response);
  }

  return cache.get(req);
};
