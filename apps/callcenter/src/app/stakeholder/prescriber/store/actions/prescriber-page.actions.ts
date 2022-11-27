import { createActionGroup, props } from '@ngrx/store';

export const prescriberPageActions = createActionGroup({
  source: 'Prescriber Page',
  events: {
    'Select Prescriber': props<{ id: string }>(),
  },
});
