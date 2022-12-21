import { type Entity } from '@roc-web/core';

import { type PatientPrescriber } from '../../patient/shared/models';
import {
  type AlternateContact,
  type Auditable,
  type Institution,
  type Stakeholder,
} from '../../shared/models';

import { type PrescriberDelegatePrescriber } from './prescriber-delegate-prescriber';

export interface Prescriber extends Entity, Auditable {
  alternateContact: AlternateContact;
  institution: Institution;
  nationalId: string;
  patientsPrescribers: PatientPrescriber[];
  prescriberDelegates: PrescriberDelegatePrescriber[];
  stakeholder: Stakeholder;
}
