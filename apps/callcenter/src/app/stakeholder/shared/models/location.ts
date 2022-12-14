import { type Entity } from '@roc-web/core/shared';

export interface Location extends Entity {
  description: string;
  name: string;
  order: number;
}
