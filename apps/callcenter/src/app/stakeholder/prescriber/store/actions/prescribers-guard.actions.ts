import { createActionGroup, emptyProps } from '@ngrx/store';

export const prescribersGuardActions = createActionGroup({
  events: {
    'Load Prescribers': emptyProps(),
  },
  source: 'Prescribers Guard',
});
