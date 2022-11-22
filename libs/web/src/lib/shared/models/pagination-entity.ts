import { Entity } from './entity';
import { PaginationOptions } from './pagination-options';
import { PaginationResponse } from './pagination-response';
import { StateBase } from './state-base';

export interface PaginationEntity<T extends Entity> extends StateBase {
  entities: Array<Readonly<T>>;
  paginationOptions: PaginationOptions;
  pagination: PaginationResponse;
}
