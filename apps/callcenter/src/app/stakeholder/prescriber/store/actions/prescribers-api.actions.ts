import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { PaginationEntityResponse } from '@roc-web/web';

import { Prescriber } from '../../models';

export const prescribersApiActions = createActionGroup({
  source: 'Prescribers Api',
  events: {
    'Add Prescriber Success': emptyProps(),
    'Add Prescriber Failure': props<{ prescriber: Prescriber }>(),
    'Load Prescriber Success': props<{
      response: PaginationEntityResponse<Prescriber>;
    }>(),
    'Load Prescriber Failure': props<{ error: any }>(),
    'Remove Prescriber Success': emptyProps(),
    'Remove Prescriber Failure': props<{ prescriber: Prescriber }>(),
    'Search Success': props<{
      response: PaginationEntityResponse<Prescriber>;
    }>(),
    'Search Failure': props<{ error: string }>(),
    'Update Prescriber Success': emptyProps(),
    'Update Prescriber Failure': props<{ prescriber: Prescriber }>(),
  },
});
