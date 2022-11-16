import { Auditable } from '@roc-web/identity';
import { Entity } from '@roc-web/web';

import { Stakeholder } from '../../shared';

export interface Prescriber extends Entity, Auditable {
  nationalId: string;
  stakeholder: Stakeholder;
}
