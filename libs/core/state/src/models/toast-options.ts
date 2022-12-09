export const TOAST_DURATION = 5_000;

export type ToastActionType = 'DISMISS' | 'OK' | 'UNDO';

export interface ToastOptions {
  action?: ToastActionType | undefined;
  duration?: number | undefined;
  message: string;
}

export const toastOptionsDefaults: ToastOptions = {
  action: 'OK',
  duration: TOAST_DURATION,
  message: '',
};
