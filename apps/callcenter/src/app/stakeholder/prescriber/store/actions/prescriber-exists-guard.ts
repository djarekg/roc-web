import { createActionGroup, props } from '@ngrx/store';

export const prescriberExistsGuardActions = createActionGroup({
  events: {
    'Load Prescriber': props<{ id: string }>(),
  },
  source: 'Prescriber Exists Guard',
});
