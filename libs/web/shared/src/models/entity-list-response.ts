import { type Entity } from './entity';
import { type EntityList } from './entity-list';

export interface EntityListRespone<T extends Entity>
  extends Pick<EntityList<T>, 'entities' | 'pagination'> {}
