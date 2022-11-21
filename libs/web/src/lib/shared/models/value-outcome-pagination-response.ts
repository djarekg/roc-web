export interface ValueOutcomePaginationResponse<T extends unknown> {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  items: T[];
  pageIndex: number;
  totalCount: number;
  totalPages: number;
}

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
