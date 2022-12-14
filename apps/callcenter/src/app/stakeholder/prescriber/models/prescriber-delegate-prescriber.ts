import { type Entity } from '@roc-web/core/shared';

import { type Auditable } from '../../shared/models';

import { type Prescriber } from './prescriber';
import { type PrescriberDelegate } from './prescriber-delegate';

export interface PrescriberDelegatePrescriber extends Entity, Auditable {
  isCurrent: boolean;
  prescriber: Prescriber;
  prescriberDelegate: PrescriberDelegate;
  prescriberDelegateId: string;
  prescriberId: string;
}
