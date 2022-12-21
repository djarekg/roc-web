import { type TOAST_CLASS } from '../constants';
import { type ToastTypes } from '../enums';

export type ToastTypeClass = `${typeof TOAST_CLASS}--${Lowercase<ToastTypes>}`;
