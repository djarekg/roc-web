import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Pagination } from '@roc-web/web';

import { Prescriber } from '../../models';

export const collectionApiActions = createActionGroup({
  source: 'Collection Api',
  events: {
    'Add Prescriber Success': emptyProps(),
    'Add Prescriber Failure': props<{ prescriber: Prescriber }>(),
    'Load Prescriber Success': props<{
      entities: Readonly<Prescriber>[];
      pagination: Pagination;
    }>(),
    'Load Prescriber Failure': props<{ error: any }>(),
    'Remove Prescriber Success': emptyProps(),
    'Remove Prescriber Failure': props<{ prescriber: Prescriber }>(),
    'Update Prescriber Success': emptyProps(),
    'Update Prescriber Failure': props<{ prescriber: Prescriber }>(),
  },
});
