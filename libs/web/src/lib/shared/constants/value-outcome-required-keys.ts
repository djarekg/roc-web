import { RequiredKeys } from '@roc-web/core';

import { ValueOutcome } from '../models';

export const VALUE_OUTCOME_REQUIRED_KEYS: ReadonlyArray<
  keyof RequiredKeys<ValueOutcome<unknown>>
> = ['success', 'failure', 'messages'];
