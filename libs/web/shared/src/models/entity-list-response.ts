import { type Entity, type EntityList } from '@roc-web/core';

export interface EntityListRespone<T extends Entity>
  extends Pick<EntityList<T>, 'entities' | 'pagination'> {}
