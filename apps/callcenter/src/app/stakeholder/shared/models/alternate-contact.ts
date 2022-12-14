import { type Entity } from '@roc-web/core/shared';

import { type Auditable } from './auditable';

export interface AlternateContact extends Entity, Auditable {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}
