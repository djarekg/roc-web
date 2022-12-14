import { type Entity } from '@roc-web/core/shared';

import { type Stakeholder } from './stakeholder';

export interface Institution extends Entity {
  aggregationId: number;
  changeReasonDescription: string;
  isAnyAssociatedPrescriber: boolean;
  isAnyAssociatedPrescriberRegistered: boolean;
  stakeholder: Stakeholder;
}
