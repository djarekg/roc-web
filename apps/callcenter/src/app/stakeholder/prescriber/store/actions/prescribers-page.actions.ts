import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { PrescriberPaginationOptions } from '@roc-web/callcenter/stakeholder/prescriber/models';

export const prescribersPageActions = createActionGroup({
  source: 'Prescribers Page',
  events: {
    'Change Page': props<{ options: PrescriberPaginationOptions }>(),
    Enter: emptyProps(),
  },
});
