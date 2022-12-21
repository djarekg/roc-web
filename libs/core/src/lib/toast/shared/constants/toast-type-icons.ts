import { ToastIcon, ToastTypes } from '../enums';

export const toastTypeIcons: Record<ToastTypes, ToastIcon> = {
  [ToastTypes.error]: ToastIcon.error,
  [ToastTypes.info]: ToastIcon.info,
  [ToastTypes.success]: ToastIcon.success,
  [ToastTypes.warning]: ToastIcon.warn,
};
