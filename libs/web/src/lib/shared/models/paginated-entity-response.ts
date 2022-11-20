import { ImmutableArray } from '@roc-web/core';

import { Entity } from './entity';
import { Pagination } from './pagination';

export interface PaginatedEntityResponse<T extends Entity> {
  entities: ImmutableArray<T>;
  pagination: Pagination;
}
