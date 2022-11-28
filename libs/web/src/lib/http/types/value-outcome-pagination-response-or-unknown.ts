import { type ValueOutcomePaginationResponse } from '../../shared/models';

export type ValueOutcomePaginationResponseOrUnknown =
  | unknown
  | (object & {
      pagination: ValueOutcomePaginationResponse<unknown>;
    });
