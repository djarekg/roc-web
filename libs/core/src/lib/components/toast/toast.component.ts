import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  NgZone,
  type OnDestroy,
  type OnInit,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

import { TOAST_CLASS } from '../../toast/shared/constants';
import { type ToastConfigData } from '../../toast/shared/models';

@Component({
  selector: 'rw-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatIconModule, MatRippleModule, MatSnackBarModule, TitleCasePipe],
})
export class ToastComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly hostClasses = TOAST_CLASS;

  #changeDetectorRef = inject(ChangeDetectorRef);
  #hideTime: number;
  #intervalId: NodeJS.Timer | undefined;
  #ngZone = inject(NgZone);

  protected readonly data: ToastConfigData = inject(MAT_SNACK_BAR_DATA);
  protected readonly snackBarRef = inject(MatSnackBarRef);
  protected width = -1;

  ngOnInit() {
    const duration: number = this.data.duration;
    const time: number = new Date().getTime();
    this.#hideTime = time + duration;
    this.#outsideInterval(() => this.#updateProgress(), 10);
  }

  ngOnDestroy() {
    clearInterval(this.#intervalId);
  }

  #outsideInterval(func: () => unknown, timeout: number) {
    if (this.#ngZone) {
      this.#ngZone.runOutsideAngular(
        () => (this.#intervalId = setInterval(() => this.#runInsideAngular(func), timeout)),
      );
    } else {
      this.#intervalId = setInterval(() => func(), timeout);
    }
  }

  #runInsideAngular(func: () => unknown) {
    if (this.#ngZone) {
      this.#ngZone.run(() => func());
    } else {
      func();
    }
  }

  #updateProgress() {
    const { duration } = this.data;

    if (this.width === 0 || this.width === 100 || !duration) {
      return;
    }

    const now = new Date().getTime();
    const remaining = this.#hideTime - now;

    this.width = (remaining / duration) * 100;

    if (this.width <= 0) {
      this.width = 0;
    }

    if (this.width >= 100) {
      this.width = 100;
    }

    this.#changeDetectorRef.detectChanges();
  }
}
