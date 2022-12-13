import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TOAST_DURATION, toastPanelClass } from '../constants';
import { ToastTypes } from '../enums';
import { type ToastOptions } from '../models';

@Injectable()
export class ToastService {
  readonly #snackBar = inject(MatSnackBar);

  error(message: string) {
    this.#showSnackBar({ action: 'DISMISS', message }, ToastTypes.error);
  }

  info(message: string) {
    this.#showSnackBar({ message }, ToastTypes.info);
  }

  show(options: ToastOptions) {
    this.#showSnackBar(options, ToastTypes.show);
  }

  success(message: string) {
    this.#showSnackBar({ message, action: 'OK' }, ToastTypes.success);
  }

  #showSnackBar(options: ToastOptions, type: ToastTypes) {
    const { action = 'OK', duration = TOAST_DURATION, message } = options;
    const panelClass = toastPanelClass[type];

    this.#snackBar.open(message, action, {
      duration,
      panelClass,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
