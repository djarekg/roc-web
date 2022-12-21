import { type Entity } from '@roc-web/core';

import { type Stakeholder } from './stakeholder';

export interface Institution extends Entity {
  aggregationId: number;
  changeReasonDescription: string;
  isAnyAssociatedPrescriber: boolean;
  isAnyAssociatedPrescriberRegistered: boolean;
  stakeholder: Stakeholder;
}
