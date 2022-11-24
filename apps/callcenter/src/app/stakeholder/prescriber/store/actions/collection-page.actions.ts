import { SortDirection } from '@angular/material/sort';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const collectionPageActions = createActionGroup({
  source: 'Collection Page',
  events: {
    'Change Page': props<{ pageIndex: number }>(),
    Enter: emptyProps(),
    'Sort Page': props<{ active: string; direction: SortDirection }>(),
  },
});
