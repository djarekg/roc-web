import { createActionGroup, props } from '@ngrx/store';

export const prescriberExistsGuardActions = createActionGroup({
  source: 'Prescriber Exists Guard',
  events: {
    'Load Prescriber': props<{ id: string }>(),
  },
});
