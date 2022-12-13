import { createActionGroup, props } from '@ngrx/store';

import { type ToastOptions } from '../models';

export const toastActions = createActionGroup({
  source: 'Toast',
  events: {
    Info: props<{ message: string }>(),
    Show: props<{ options: ToastOptions }>(),
    Success: props<{ message: string }>(),
    Error: props<{ message: string }>(),
  },
});
