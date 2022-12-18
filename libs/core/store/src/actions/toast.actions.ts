import { createActionGroup, props } from '@ngrx/store';
import { type ToastOptions } from '@roc-web/core/components';

export const toastActions = createActionGroup({
  source: 'Toast',
  events: {
    Info: props<{ options: ToastOptions }>(),
    Show: props<{ options: ToastOptions }>(),
    Success: props<{ options: ToastOptions }>(),
    Error: props<{ options: ToastOptions }>(),
  },
});
