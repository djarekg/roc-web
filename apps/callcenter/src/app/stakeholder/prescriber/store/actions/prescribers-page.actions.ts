import { type SortDirection } from '@angular/material/sort';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const prescribersPageActions = createActionGroup({
  events: {
    'Change Page': props<{ pageIndex: number }>(),
    'Edit Prescriber': props<{ id: string }>(),
    'Filter Change': props<{ filter: string }>(),
    'Load Prescribers': emptyProps(),
    'Sort Page': props<{ active: string; direction: SortDirection }>(),
    'View Prescriber': props<{ id: string }>(),
  },
  source: 'Prescriber List Page',
});
