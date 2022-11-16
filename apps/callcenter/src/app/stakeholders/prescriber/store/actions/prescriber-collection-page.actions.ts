import { createActionGroup, props } from '@ngrx/store';

import { PaginationOptions } from '@roc-web/web';

export const prescriberCollectionPageActions = createActionGroup({
  source: 'Prescriber Collection Page',
  events: {
    Enter: props<{ options: PaginationOptions }>(),
  },
});
