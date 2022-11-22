import { Entity } from './entity';
import { PaginationResponse } from './pagination-response';

export interface PaginationEntityResponse<T extends Entity> {
  entities: Array<Readonly<T>>;
  pagination: PaginationResponse;
}
