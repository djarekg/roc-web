import { createActionGroup, emptyProps } from '@ngrx/store';

export const routeProgressActions = createActionGroup({
  source: 'Router',
  events: {
    'Navigation Started': emptyProps(),
    'Navigation Completed': emptyProps(),
  },
});
