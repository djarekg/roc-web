import { type Entity } from '@roc-web/core';

import { type LabTest } from '../../../lab-test/shared/models';
import { type Prescriber } from '../../../prescriber/models';
import { type GenderType } from '../../../shared/enums';
import { type Stakeholder, type Status } from '../../../shared/models';

import { type PatientPrescriber } from './patient-prescriber';

export interface Patient extends Entity {
  birthDate: string;
  changeReasonDescription: string;
  currentLabTest: LabTest;
  gender: GenderType;
  medicalRecordNumber: string;
  patientsPrescribers: PatientPrescriber[];
  prescriber: Prescriber;
  stakeholder: Stakeholder;
  status: Status;
}
