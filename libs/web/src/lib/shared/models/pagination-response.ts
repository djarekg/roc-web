import { Pagination } from './pagination';

export interface PaginationResponse extends Pagination {
  totalCount: number;
}
