import {
  HttpErrorResponse,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';

import {
  ValueOutcome,
  ValueOutcomePaginationResponse,
  VALUE_OUTCOME_PAGINATION_RESPONSE_KEYS,
  VALUE_OUTCOME_REQUIRED_KEYS,
} from '../../shared/models';

export function isHttpResponseBodyObject(body: unknown): body is object {
  return !!body && typeof body === 'object';
}

export function isHttpValueOutcomeResponse(
  response: HttpEvent<unknown> | HttpErrorResponse
): response is HttpResponse<ValueOutcome<unknown>> {
  if (response instanceof HttpResponse) {
    const body = response.body;

    return (
      isHttpResponseBodyObject(body) &&
      VALUE_OUTCOME_REQUIRED_KEYS.every(key => key in body)
    );
  }

  return false;
}

export function isHttpValueOutcomePaginationResponse(
  body: unknown
): body is ValueOutcomePaginationResponse<unknown> {
  return (
    isHttpResponseBodyObject(body) &&
    VALUE_OUTCOME_PAGINATION_RESPONSE_KEYS.every(key => key in body)
  );
}
