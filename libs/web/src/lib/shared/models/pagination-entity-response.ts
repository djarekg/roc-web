import { ImmutableArray } from '@roc-web/core';

import { Entity } from './entity';
import { PaginationResponse } from './pagination-response';

export interface PaginationEntityResponse<T extends Entity> {
  entities: ImmutableArray<T>;
  pagination: PaginationResponse;
}
