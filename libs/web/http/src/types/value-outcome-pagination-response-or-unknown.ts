import { type ValueOutcomePaginationResponse } from '@roc-web/web/shared';

export type ValueOutcomePaginationResponseOrUnknown =
  | unknown
  | (object & {
      pagination: ValueOutcomePaginationResponse<unknown>;
    });
