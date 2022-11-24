import { Auditable } from '@roc-web/identity';
import { Entity } from '@roc-web/web';

import { Stakeholder } from '../../models';

export interface Prescriber extends Entity, Auditable {
  alternateContact: unknown; //AlternateContact;
  institution: unknown; //Institution;
  nationalId: string;
  patientsPrescribers: unknown; //PatientPrescriber[];
  prescriberDelegates: unknown; //PrescriberDelegatePrescriber[];
  stakeholder: Stakeholder;
}
