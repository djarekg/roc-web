import { TOAST_DURATION } from '../constants';
import { type ToastActionType } from '../types';

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
