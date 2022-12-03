export interface ValueOutcomePaginationResponse<T extends unknown> {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  items: T[];
  pageIndex: number;
  totalCount: number;
  totalPages: number;
}
