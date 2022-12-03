import { type Auditable } from '@roc-web/identity/shared';
import { type Entity } from '@roc-web/web/shared';

import { type Stakeholder } from '../../models';

export interface Prescriber extends Entity, Auditable {
  alternateContact: unknown; //AlternateContact;
  institution: unknown; //Institution;
  nationalId: string;
  patientsPrescribers: unknown; //PatientPrescriber[];
  prescriberDelegates: unknown; //PrescriberDelegatePrescriber[];
  stakeholder: Stakeholder;
}
