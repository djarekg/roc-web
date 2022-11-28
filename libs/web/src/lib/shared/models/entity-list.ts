import { type Sort } from '@angular/material/sort';

import { type Entity } from './entity';
import { type Pagination } from './pagination';

export interface EntityList<T extends Entity> {
  entities: Readonly<T>[];
  pagination: Pagination;
  sort: Sort;
}
