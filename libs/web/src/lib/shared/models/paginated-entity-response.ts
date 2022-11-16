import { Entity } from './entity';
import { Pagination } from './pagination';

export interface PaginatedEntityResponse<T extends Entity> {
  entities: ReadonlyArray<T>;
  pagination: Pagination;
}
