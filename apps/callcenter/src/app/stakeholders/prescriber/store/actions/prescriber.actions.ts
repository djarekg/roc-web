import { createActionGroup, props } from '@ngrx/store';

import { Prescriber } from '../../models';

export const prescriberActions = createActionGroup({
  source: 'Prescriber Exists',
  events: {
    'Load Prescriber': props<{ prescriber: Prescriber }>(),
  },
});
