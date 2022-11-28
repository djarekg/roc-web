import { createActionGroup, props } from '@ngrx/store';
import { type Prescriber } from '@roc-web/callcenter/stakeholder/prescriber/models';

export const prescriberDetailPageActions = createActionGroup({
  source: 'Selected Prescriber Page',
  events: {
    'Add Prescriber': props<{ prescriber: Prescriber }>(),
    'Remove Prescriber': props<{ prescriber: Prescriber }>(),
    'Update Prescriber': props<{ prescriber: Prescriber }>(),
  },
});
