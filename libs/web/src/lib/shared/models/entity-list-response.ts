import { Entity } from './entity';
import { EntityList } from './entity-list';

export interface EntityListRespones<T extends Entity>
  extends Pick<EntityList<T>, 'entities' | 'pagination'> {}
