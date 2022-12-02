import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  type HttpEvent,
  type HttpHandlerFn,
  type HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { type Observable, map } from 'rxjs';

import { isHttpValueOutcomePaginationResponse } from '../utils';

export const HTTP_ENTITY_PAGINATION_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  if (req.params.has('pageIndex')) {
    const pageIndex = coerceNumberProperty(req.params.get('pageIndex'), 0);
    req = req.clone({
      params: req.params.set('pageIndex', `${pageIndex + 1}`),
    });
  }

  return next(req).pipe(
    map(resp => {
      if (resp instanceof HttpResponse) {
        let body = resp.body;

        if (isHttpValueOutcomePaginationResponse(body)) {
          const {
            hasNextPage,
            hasPreviousPage,
            itemCount,
            items,
            pageIndex,
            totalCount,
            totalPages,
            ...rest
          } = body;

          body = {
            ...rest,
            entities: items,
            pagination: {
              pageIndex: pageIndex - 1,
              pageSize: itemCount,
              totalCount,
            },
          };
          return resp.clone({ body: body });
        }
      }

      return resp;
    })
  );
};
