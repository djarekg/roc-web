import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { type ToastOptions, toastOptionsDefaults } from '../models';

export const TOAST_PANEL_CLASS = 'rw-toast-panel';

@Injectable()
export class ToastService {
  readonly #snackBar = inject(MatSnackBar);

  show(options: ToastOptions = toastOptionsDefaults) {
    const { action, duration, message } = options;

    this.#snackBar.open(message, action, {
      duration: duration,
      panelClass: TOAST_PANEL_CLASS,
    });
  }
}
