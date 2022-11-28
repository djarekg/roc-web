import { type ValueOutcomePaginationResponse } from '../models';

export const VALUE_OUTCOME_PAGINATION_RESPONSE_KEYS: ReadonlyArray<
  keyof ValueOutcomePaginationResponse<unknown>
> = [
  'hasNextPage',
  'hasPreviousPage',
  'itemCount',
  'items',
  'pageIndex',
  'totalCount',
  'totalPages',
];
