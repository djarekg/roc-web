import { type Stakeholder } from '@roc-web/callcenter/stakeholder/models';
import { type Auditable } from '@roc-web/identity';
import { type Entity } from '@roc-web/web';

export interface Prescriber extends Entity, Auditable {
  alternateContact: unknown; //AlternateContact;
  institution: unknown; //Institution;
  nationalId: string;
  patientsPrescribers: unknown; //PatientPrescriber[];
  prescriberDelegates: unknown; //PrescriberDelegatePrescriber[];
  stakeholder: Stakeholder;
}
