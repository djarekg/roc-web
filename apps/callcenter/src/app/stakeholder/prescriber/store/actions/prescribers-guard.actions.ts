import { createActionGroup, emptyProps } from '@ngrx/store';

export const prescriberGuardActions = createActionGroup({
  source: 'Prescriber Guard',
  events: {
    'Load Prescriber': emptyProps(),
  },
});
