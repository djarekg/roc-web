import { type Entity } from '@roc-web/core';

import { type Prescriber } from '../../../prescriber/models';
import { type Auditable } from '../../../shared/models';

import { type Patient } from './patient';

export interface PatientPrescriber extends Entity, Auditable {
  isCurrent: boolean;
  patient: Patient;
  patientId: number;
  prescriber: Prescriber;
  prescriberId: number;
}
