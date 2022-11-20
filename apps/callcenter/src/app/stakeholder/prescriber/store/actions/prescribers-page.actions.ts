import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { PaginationOptions } from '@roc-web/web';

export const prescribersPageActions = createActionGroup({
  source: 'Prescribers Page',
  events: {
    'Change Page': props<{ options: PaginationOptions }>(),
    Enter: emptyProps(),
  },
});
