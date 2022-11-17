import { createActionGroup, props } from '@ngrx/store';

export const findPrescriberPageActions = createActionGroup({
  source: 'Find Prescriber Page',
  events: {
    'Search Prescribers': props<{ filter: string }>(),
  },
});
