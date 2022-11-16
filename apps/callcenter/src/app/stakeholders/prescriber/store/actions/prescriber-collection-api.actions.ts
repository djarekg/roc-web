import { createActionGroup, props } from '@ngrx/store';

import { PaginatedList } from '@roc-web/web';

import { Prescriber } from '../../models';

export const prescriberCollectionApiActions = createActionGroup({
  source: 'Prescriber Collection Api',
  events: {
    'Load Prescriber Success': props<{
      prescribers: PaginatedList<Prescriber>;
    }>(),
    'Load Prescriber Failure': props<{ error: any }>(),
    'Add Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Add Prescriber Failure': props<{ prescriber: Prescriber }>(),
    'Update Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Update Prescriber Failure': props<{ prescriber: Prescriber }>(),
    'Remove Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Remove Prescriber Failure': props<{ prescriber: Prescriber }>(),
  },
});
