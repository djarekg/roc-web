import { ValueOutcomePaginationResponse } from '../../shared/models';

export type PaginationOrUnknown =
  | (object & {
      pagination: ValueOutcomePaginationResponse<unknown>;
    })
  | unknown;
