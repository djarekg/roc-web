import { ValueOutcomePaginationResponse } from '../../shared/models';

export type ValueOutcomePaginationResponseOrUnknown =
  | (object & {
      pagination: ValueOutcomePaginationResponse<unknown>;
    })
  | unknown;
