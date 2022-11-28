import {
  type HttpEvent,
  type HttpHandlerFn,
  type HttpRequest,
} from '@angular/common/http';
import { type Observable, map } from 'rxjs';

import { type ValueOutcomePaginationResponseOrUnknown } from '../types';
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
        let body: ValueOutcomePaginationResponseOrUnknown = resp.body?.value;

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
