import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ToastComponent } from '../../components';
import {
  TOAST_DURATION,
  TOAST_PANEL_CLASS,
  toastTypeIcons,
  toastTypeTitles,
} from '../constants';
import { toastPanelClass } from '../constants/toast-panel-class';
import { ToastTypes } from '../enums';
import { type ToastConfigData, type ToastOptions } from '../models';

@Injectable()
export class ToastService {
  readonly #snackBar = inject(MatSnackBar);

  error(options: ToastOptions) {
    this.#showSnackBar(options, ToastTypes.error);
  }

  info(options: ToastOptions) {
    this.#showSnackBar(options, ToastTypes.info);
  }

  success(options: ToastOptions) {
    this.#showSnackBar(options, ToastTypes.success);
  }

  #showSnackBar(options: ToastOptions, type: ToastTypes) {
    const {
      duration = TOAST_DURATION,
      message = '',
      title = toastTypeTitles[type],
    } = options;
    const icon = toastTypeIcons[type];
    const panelClass = [TOAST_PANEL_CLASS, toastPanelClass[type]];

    this.#snackBar.openFromComponent<ToastComponent, ToastConfigData>(
      ToastComponent,
      {
        data: {
          duration,
          icon,
          message,
          title,
        },
        duration,
        panelClass,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      },
    );
  }
}
