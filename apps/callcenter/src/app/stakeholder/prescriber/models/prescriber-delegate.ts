import { type Entity } from '@roc-web/core/shared';

import { type Auditable } from '../../shared/models';

import { type Prescriber } from './prescriber';

export interface PrescriberDelegate extends Entity, Auditable {
  isCurrent: boolean;
  prescriber: Prescriber;
  prescriberDelegate: PrescriberDelegate;
  prescriberId: number;
}
