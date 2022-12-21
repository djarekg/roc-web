import { type Entity } from '@roc-web/core';

export interface Location extends Entity {
  description: string;
  name: string;
  order: number;
}
