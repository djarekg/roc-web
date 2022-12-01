import { createActionGroup, emptyProps } from '@ngrx/store';

export const routeProgressActions = createActionGroup({
  events: {
    'Navigation Completed': emptyProps(),
    'Navigation Started': emptyProps(),
  },
  source: 'Router',
});
