import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { PaginationOrUnknown } from '../types';
import {
  isHttpValueOutcomePaginationResponse,
  isHttpValueOutcomeResponse,
} from '../utils';

export const HTTP_RESPONSE_UNWRAP_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  return next(req).pipe(
    map(resp => {
      if (isHttpValueOutcomeResponse(resp)) {
        let body: PaginationOrUnknown = resp.body?.value;

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
              pageIndex,
              pageSize: itemCount,
              totalCount,
            },
          };
        }

        return resp.clone({ body: body });
      }

      return resp;
    })
  );
};
