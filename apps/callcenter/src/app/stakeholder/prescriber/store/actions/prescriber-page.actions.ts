import { createActionGroup, props } from '@ngrx/store';

export const prescriberPageActions = createActionGroup({
  events: {
    'Select Prescriber': props<{ id: string }>(),
  },
  source: 'Prescriber Page',
});
