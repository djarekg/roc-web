import { NgIf } from '@angular/common';
import {
  type AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  Input,
  type OnDestroy,
  inject,
} from '@angular/core';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'rw-form-field',
  standalone: true,
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, NgIf],
})
export class FormFieldComponent implements AfterContentInit, OnDestroy {
  #changeDetectorRef = inject(ChangeDetectorRef);
  #destroy$ = new Subject<void>();
  #explicitFormFieldControl: MatFormFieldControl<any>;

  @Input() label: string | undefined;

  @ContentChild(MatFormField) private readonly _formField: MatFormField;
  @ContentChild(MatFormFieldControl) private readonly _formFieldControl: MatFormFieldControl<unknown>;

  get #control(): MatFormFieldControl<unknown> {
    return this.#explicitFormFieldControl || this._formFieldControl;
  }
  set #control(value: MatFormFieldControl<unknown>) {
    this.#explicitFormFieldControl = value;
  }

  @HostBinding('class') readonly classes = 'rw-form-field';

  ngAfterContentInit() {
    const control = this.#control;

    if (control) {
      control.stateChanges
        .pipe(
          tap(() => this.#changeDetectorRef.markForCheck()),
          takeUntil(this.#destroy$),
        )
        .subscribe();
    }
  }

  ngOnDestroy() {
    this.#destroy$.next();
    this.#destroy$.complete();
  }
}
