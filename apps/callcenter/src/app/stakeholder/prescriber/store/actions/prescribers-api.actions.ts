import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { type Prescriber } from '@roc-web/callcenter/stakeholder/prescriber/models';
import { type Pagination } from '@roc-web/web';

export const prescribersApiActions = createActionGroup({
  source: 'Prescribers Api',
  events: {
    'Add Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Add Prescriber Failure': props<{ error: any }>(),
    'Load Prescriber Success': props<{ prescriber: Prescriber }>(),
    'Load Prescriber Failure': props<{ error: any }>(),
    'Load Prescribers Success': props<{
      entities: Readonly<Prescriber>[];
      pagination: Pagination;
    }>(),
    'Load Prescribers Failure': props<{ error: any }>(),
    'Remove Prescriber Success': emptyProps(),
    'Remove Prescriber Failure': props<{ error: any }>(),
    'Update Prescriber Success': emptyProps(),
    'Update Prescriber Failure': props<{ error: any }>(),
  },
});
