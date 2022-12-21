import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { type AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomValidators } from '@roc-web/core';

import { type ChangePassword } from '../../models';
import { PasswordValidationComponent } from '../password-validation';

// type ChipColor = '' | 'error' | 'success';

@Component({
  selector: 'rw-settings-change-password-form',
  standalone: true,
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    PasswordValidationComponent,
    ReactiveFormsModule,
  ],
})
export class ChangePasswordFormComponent {
  protected form = new FormBuilder().nonNullable.group({
    confirmNewPassword: ['', Validators.required, CustomValidators.equalTo('newPassword')],
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

  protected get newPassword(): AbstractControl<string, string> | null {
    return this.form.get('newPassword');
  }

  @Output() submitted = new EventEmitter<ChangePassword>();

  onSubmit(): void {
    this.submitted.emit(this.form.getRawValue());
  }
}
