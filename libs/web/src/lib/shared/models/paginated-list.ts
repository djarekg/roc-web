export interface PaginatedList<T> {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: ReadonlyArray<T>;
  pageIndex: number;
  totalCount: number;
  totalPages: number;
}
