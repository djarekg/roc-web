import { createActionGroup, props } from '@ngrx/store';
import { PaginatedList } from '@roc-web/web';

import { Prescriber } from '../../models';

export const prescribersApiActions = createActionGroup({
  source: 'Prescribers Api',
  events: {
    'Search Success': props<{ prescribers: PaginatedList<Prescriber> }>(),
    'Search Failure': props<{ error: string }>(),
  },
});
