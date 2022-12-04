import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  type FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomValidators } from '@roc-web/core/shared';

import { type ChangePassword } from '../../models';
import { PasswordValidationComponent } from '../password-validation';

// type ChipColor = '' | 'error' | 'success';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    PasswordValidationComponent,
    ReactiveFormsModule,
  ],
  selector: 'rw-settings-change-password-form',
  standalone: true,
  styleUrls: ['./change-password-form.component.scss'],
  templateUrl: './change-password-form.component.html',
})
export class ChangePasswordFormComponent {
  protected form = new FormBuilder().nonNullable.group({
    confirmNewPassword: [
      '',
      Validators.required,
      CustomValidators.equalTo('newPassword'),
    ],
    currentPassword: ['', Validators.required],
    newPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.numericCharacter(),
        CustomValidators.specialCharacter(),
        CustomValidators.equalTo('confirmNewPassword', true),
      ],
    ],
  });

  protected get newPassword(): FormControl {
    return this.form.get('newPassword') as FormControl;
  }

  @Output() submitted = new EventEmitter<ChangePassword>();

  onSubmit(): void {
    this.submitted.emit(this.form.getRawValue());
  }
}
