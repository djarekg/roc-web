import { createActionGroup, props } from '@ngrx/store';

export const viewPrescriberPageActions = createActionGroup({
  source: 'View Prescriber Page',
  events: {
    'Select Prescriber': props<{ id: string }>(),
  },
});
