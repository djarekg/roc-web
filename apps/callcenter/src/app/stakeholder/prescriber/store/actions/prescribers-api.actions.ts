import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { type Pagination } from '@roc-web/core/shared';

import { type Prescriber } from '../../models';

export const prescribersApiActions = createActionGroup({
  events: {
    'Add Prescriber Failure': props<{ error: any }>(),
    'Add Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Load Prescriber Failure': props<{ error: any }>(),
    'Load Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Load Prescribers Failure': props<{ error: any }>(),
    'Load Prescribers Success': props<{
      entities: Readonly<Prescriber>[];
      pagination: Pagination;
    }>(),
    'Remove Prescriber Failure': props<{ error: any }>(),
    'Remove Prescriber Success': emptyProps(),
    'Update Prescriber Failure': props<{ error: any }>(),
    'Update Prescriber Success': emptyProps(),
  },
  source: 'Prescribers Api',
});
