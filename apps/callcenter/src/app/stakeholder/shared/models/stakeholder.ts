import { type Entity } from '@roc-web/core';
import { type User } from '@roc-web/identity/shared';

import { type StakeholderType } from '../enums';

import { type Address } from './address';
import { type Attestation } from './attestation';
import { type Auditable } from './auditable';
import { type Status } from './status';

export interface Stakeholder extends Entity, Auditable {
  address: Address;
  attestations: Attestation[];
  email: string;
  externalId: number;
  fax: string;
  firstName: string;
  lastName: string;
  middleName: string;
  notes: string;
  phone: string;
  stakeholderType: StakeholderType;
  statuses: Status[];
  suffix: string;
  user: User;
}
