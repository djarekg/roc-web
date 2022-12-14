import { type ChangeReasonType, type StatusType } from '../enums';

import { type Auditable } from './auditable';

export interface Status extends Auditable {
  changeReasonDescription: string;
  changeReasonType: ChangeReasonType;
  id: string;
  isCurrent: boolean;
  stakeholderId: string;
  statusType: StatusType;
}
