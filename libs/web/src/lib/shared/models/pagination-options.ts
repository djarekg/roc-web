import { Sort } from '@angular/material/sort';

import { Pagination } from './pagination';

export interface PaginationOptions extends Pagination {
  filter: string | null;
  sort: Sort;
}
