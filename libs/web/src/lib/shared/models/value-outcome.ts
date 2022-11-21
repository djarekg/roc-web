import { RequiredKeys } from '@roc-web/core';

import { ValueOutcomePaginationResponse } from './value-outcome-pagination-response';

export class ValueOutcome<T extends unknown> {
  failure: boolean = false;
  keys?: { [key: string]: unknown };
  messages: string[] | null = null;
  statusCode?: number;
  success: boolean = false;
  value?: ValueOutcomePaginationResponse<T> | T;
}

export const VALUE_OUTCOME_REQUIRED_KEYS: ReadonlyArray<
  keyof RequiredKeys<ValueOutcome<unknown>>
> = ['success', 'failure', 'messages'];
