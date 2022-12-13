import { ToastTypes } from '../enums';
import { type ToastTypeClass } from '../types';

export const toastPanelClass: Record<ToastTypes, ToastTypeClass> = {
  [ToastTypes.info]: 'rw-toast-info',
  [ToastTypes.show]: 'rw-toast-show',
  [ToastTypes.success]: 'rw-toast-success',
  [ToastTypes.error]: 'rw-toast-error',
};
