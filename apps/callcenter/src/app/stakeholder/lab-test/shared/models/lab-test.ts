import { type Entity } from '@roc-web/core';

import { type Patient } from '../../../patient/shared/models';
import { type Prescriber } from '../../../prescriber/models';
import { type Auditable, type Stakeholder } from '../../../shared/models';

export interface LabTest extends Entity, Auditable {
  actualSpecimenArrivalDateTime: string;
  actualSpecimenArrivalDateTimeSecondary: string;
  appointmentDateTime: string;
  arupAccessionID: string;
  arupOrderDate: Date;
  arupPatientId: string;
  arupReceivedDateTime: Date;
  estimatedSpecimenArrivalDateTime: string;
  estimatedSpecimenArrivalDateTimeSecondary: string;
  lab: unknown; //Lab
  labId: number;
  labTestComplete: boolean;
  numberOfSpecimensSubmitted: number;
  patient: Patient;
  patientId: number;
  prescriber: Prescriber;
  prescriberId: number;
  requiresSampleShippingKit: boolean;
  resultNotificationSentToPrescriber: Date;
  resultVerificationDate: Date;
  specimenCollectionDateTime: string;
  specimenTransportDispatchDateTime: string;
  specimenTransportDispatchDateTimeSecondary: string;
  specimenTransportPickupDateTime: string;
  specimenTransportPickupDateTimeSecondary: string;
  stakeholder: Stakeholder;
  testResult: string;
  trackingNumber: string;
  trackingNumberSecondary: string;
}
