import { Auditable } from '@roc-web/identity';
import { Entity } from '@roc-web/web';

export interface Stakeholder extends Entity, Auditable {
  address: unknown; //Address;
  attestations: unknown; //Attestation[];
  email: string;
  externalId: number;
  fax: string;
  firstName: string;
  lastName: string;
  middleName: string;
  notes: string;
  phone: string;
  stakeholderType: unknown; //StakeholderTypes;
  statuses: unknown; //Status[];
  suffix: string;
  user: unknown; //User;
}