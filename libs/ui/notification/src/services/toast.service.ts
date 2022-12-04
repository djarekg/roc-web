import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TOAST_ACTION, TOAST_DURATION } from '../constants';

/**
 * This service displays toast messages using the Angular Material SnackBar.
 *
 * @export
 * @class ToastService
 */
@Injectable()
export class ToastService {
  readonly #snackBar = inject(MatSnackBar);

  /**
   * Show toast message.
   *
   * @param {string} message - The message to be displayed.
   * @param {*} [duration=TOAST_DURATION] - The duration that the message will be shown.
   * @param {string} [action=TOAST_ACTION] - The label for the snack bar's action button.
   */
  show(
    message: string,
    duration = TOAST_DURATION,
    action: string = TOAST_ACTION,
  ): void {
    this.#snackBar.open(message, action, { duration });
  }
}
