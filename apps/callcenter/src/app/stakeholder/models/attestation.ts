import { type Auditable } from './auditable';

export interface Attestation extends Auditable {
  attestationType: unknown;
  changeReasonDescription: string;
  guardianName: string;
  hasConsent: boolean;
  hasSignature: boolean;
  id: string;
  isCurrent: boolean;
  signatureDate: Date; // AttestationTypes;
  stakeholderId: string;
}
