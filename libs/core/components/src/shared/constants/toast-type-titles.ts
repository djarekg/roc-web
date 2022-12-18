import { ToastTypes } from '../enums';

export const toastTypeTitles: Record<ToastTypes, string | null> = {
  [ToastTypes.error]: 'Error',
  [ToastTypes.info]: null,
  [ToastTypes.success]: 'Success',
  [ToastTypes.warning]: 'Warning',
};
