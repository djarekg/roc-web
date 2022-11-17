import { Sort } from '@angular/material/sort';
import { Pagination } from './pagination';

export interface PaginationOptions
  extends Pick<Pagination, 'pageIndex' | 'pageSize'> {
  sort: Sort;
}
