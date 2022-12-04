import { type Entity, type EntityList } from '@roc-web/core/shared';

export interface EntityListRespone<T extends Entity>
  extends Pick<EntityList<T>, 'entities' | 'pagination'> {}
