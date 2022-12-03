import { createActionGroup, props } from '@ngrx/store';

import { type Prescriber } from '../../models';

export const prescriberDetailPageActions = createActionGroup({
  events: {
    'Add Prescriber': props<{ prescriber: Prescriber }>(),
    'Remove Prescriber': props<{ prescriber: Prescriber }>(),
    'Update Prescriber': props<{ prescriber: Prescriber }>(),
  },
  source: 'Selected Prescriber Page',
});
