import { ToastTypes } from '../enums';
import { type ToastTypeClass } from '../types';

export const toastPanelClass: Record<ToastTypes, ToastTypeClass> = {
  [ToastTypes.info]: 'rw-toast--info',
  [ToastTypes.success]: 'rw-toast--success',
  [ToastTypes.error]: 'rw-toast--error',
  [ToastTypes.warning]: 'rw-toast--warning',
};
