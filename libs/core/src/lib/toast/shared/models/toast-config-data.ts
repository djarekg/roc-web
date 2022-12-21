import { type ToastOptions } from './toast-options';

export interface ToastConfigData
  extends Pick<ToastOptions, 'message' | 'title'> {
  duration: number;
  icon: string;
}
