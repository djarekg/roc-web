import { createActionGroup, props } from '@ngrx/store';

import { type ToastOptions } from '../models';

export const toastActions = createActionGroup({
  source: 'Toast',
  events: {
    Show: props<{ toast: ToastOptions }>(),
  },
});
