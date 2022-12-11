import { ToastType } from '../enums';

export const toastPanelsClasses: Record<ToastType, string> = {
  [ToastType.info]: 'rw-toast-info',
  [ToastType.show]: 'rw-toast-show',
  [ToastType.success]: 'rw-toast-success',
  [ToastType.error]: 'rw-toast-error',
};
