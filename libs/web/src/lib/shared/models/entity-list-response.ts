import { Entity } from './entity';
import { EntityList } from './entity-list';

export interface EntityListRespone<T extends Entity>
  extends Pick<EntityList<T>, 'entities' | 'pagination'> {}
