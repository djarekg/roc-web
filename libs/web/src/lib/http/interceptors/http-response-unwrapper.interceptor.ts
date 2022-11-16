import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pagination } from '../../shared';

import { Outcome } from '../models';

export const HTTP_RESPONSE_UNWRAPPER_INTERCEPTOR = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  return next(req).pipe(
    map(response => {
      if (isHttpOutcomeResponse(response)) {
        let body = response.body?.value;

        if (isPagination(body)) {
          const { pageIndex, pageSize, totalCount, ...rest } = body;

          body = {
            ...rest,
            pagination: {
              pageIndex,
              pageSize,
              totalCount,
            },
          };
        }

        return response.clone({ body: body });
      }

      return response;
    })
  );
};

function isHttpOutcomeResponse(
  response: HttpEvent<unknown>
): response is HttpResponse<Outcome> {
  return response instanceof HttpResponse && response instanceof Outcome;
}

function isPagination(body: unknown): body is Pagination {
  if (!!body && typeof body === 'object') {
    return ['pageIndex', 'pageSize', 'totalCount'].every(prop => prop in body);
  }

  return false;
}
