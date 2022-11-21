import { createActionGroup, props } from '@ngrx/store';

import { Prescriber } from '../../models';

export const selectedPrescriberPageActions = createActionGroup({
  source: 'Selected Prescriber Page',
  events: {
    'Select Prescriber': props<{ id: string }>(),
    'Add Prescriber': props<{ prescriber: Prescriber }>(),
    'Remove Prescriber': props<{ prescriber: Prescriber }>(),
    'Update Prescriber': props<{ prescriber: Prescriber }>(),
  },
});