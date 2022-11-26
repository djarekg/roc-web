import { createActionGroup, emptyProps } from '@ngrx/store';

export const prescribersGuardActions = createActionGroup({
  source: 'Prescribers Guard',
  events: {
    'Load Prescribers': emptyProps(),
  },
});
