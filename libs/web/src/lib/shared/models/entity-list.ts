import { Sort } from '@angular/material/sort';

import { Entity } from './entity';
import { Pagination } from './pagination';

export interface EntityList<T extends Entity> {
  entities: Readonly<T>[];
  pagination: Pagination;
  sort: Sort;
}
