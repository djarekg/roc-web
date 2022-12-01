import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { type Credentials } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  selector: 'rw-signin-form',
  standalone: true,
  styleUrls: ['./signin-form.component.scss'],
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
  @Input() disabled: boolean | undefined = false;

  @Output()
  submitted = new EventEmitter<Credentials>();

  protected fb = new FormBuilder().nonNullable.group(
    {
      password: ['', Validators.required],
      userName: ['', Validators.required],
    },
    { updateOn: 'blur' }
  );
  protected passwordInputIcon: 'visibility_off' | 'visibility' =
    'visibility_off';
  protected passwordInputType: 'password' | 'text' = 'password';

  protected togglePasswordInputType(): void {
    this.passwordInputType =
      this.passwordInputType === 'text' ? 'password' : 'text';
    this.passwordInputIcon =
      this.passwordInputIcon === 'visibility' ? 'visibility_off' : 'visibility';
  }

  protected onSubmit(): void {
    this.submitted.emit(this.fb.getRawValue());
  }
}
