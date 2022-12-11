import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TOAST_DURATION, toastPanelsClasses } from '../constants';
import { ToastType } from '../enums';
import { type ToastOptions } from '../models';

@Injectable()
export class ToastService {
  readonly #snackBar = inject(MatSnackBar);

  error(error: string) {
    this.#showSnackBar({ message: error }, ToastType.error);
  }

  info(message: string) {
    this.#showSnackBar({ message }, ToastType.info);
  }

  show(options: ToastOptions) {
    this.#showSnackBar(options, ToastType.show);
  }

  success(message: string) {
    this.#showSnackBar({ message, action: 'OK' }, ToastType.success);
  }

  #showSnackBar(options: ToastOptions, type: ToastType) {
    const { action = 'OK', duration = TOAST_DURATION, message } = options;

    this.#snackBar.open(message, action, {
      duration: duration,
      panelClass: toastPanelsClasses[type],
    });
  }
}
