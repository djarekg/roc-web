import { type ValueOutcomePaginationResponse } from './value-outcome-pagination-response';

export class ValueOutcome<T extends unknown> {
  failure: boolean = false;
  keys?: { [key: string]: unknown };
  messages: string[] | null = null;
  statusCode?: number;
  success: boolean = false;
  value?: T | ValueOutcomePaginationResponse<T>;
}
