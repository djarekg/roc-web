import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const ACTION = 'OK';
const DURATION = 5000;

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
   * @param {*} [duration=DURATION] - The duration that the message will be shown.
   * @param {string} [action=ACTION] - The label for the snack bar's action button.
   */
  show(message: string, duration = DURATION, action: string = ACTION): void {
    this.#snackBar.open(message, action, { duration });
  }
}
