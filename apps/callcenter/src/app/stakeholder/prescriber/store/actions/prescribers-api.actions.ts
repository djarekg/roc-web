import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { type Pagination } from '@roc-web/core';

import { type Prescriber } from '../../models';

export const prescribersApiActions = createActionGroup({
  events: {
    'Add Prescriber Failure': props<{ error: string }>(),
    'Add Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Load Prescriber Failure': props<{ error: string }>(),
    'Load Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Load Prescribers Failure': props<{ error: string }>(),
    'Load Prescribers Success': props<{
      entities: Readonly<Prescriber>[];
      pagination: Pagination;
    }>(),
    'Remove Prescriber Failure': props<{ error: string }>(),
    'Remove Prescriber Success': emptyProps(),
    'Update Prescriber Failure': props<{ error: string }>(),
    'Update Prescriber Success': emptyProps(),
  },
  source: 'Prescribers Api',
});
