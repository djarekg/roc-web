import { type Prescriber } from './prescriber';

export type PrescriberColumns = keyof Pick<Prescriber, 'nationalId'>;
