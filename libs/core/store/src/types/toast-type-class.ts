import { type TOAST_CLASS } from '../constants';
import { type ToastTypes } from '../enums';

type ToastType = `${ToastTypes}`;
export type ToastTypeClass = `${typeof TOAST_CLASS}--${Lowercase<ToastType>}`;
