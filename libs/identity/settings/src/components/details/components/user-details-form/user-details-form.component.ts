import { NgIf } from '@angular/common';
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
import { type TokenUser } from '@roc-web/identity/auth';

@Component({
  selector: 'rw-settings-user-details-form',
  standalone: true,
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
  ],
})
export class UserDetailsFormComponent {
  #user: TokenUser | null | undefined = null;

  protected fb = new FormBuilder().nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  @Input()
  get user(): TokenUser | null | undefined {
    return this.#user;
  }
  set user(value: TokenUser | null | undefined) {
    this.#user = value;

    if (value) {
      this.fb.setValue(value);
    } else {
      this.fb.reset();
    }
  }

  @Output() submitted = new EventEmitter<TokenUser>();

  onSubmit(): void {
    this.submitted.emit(this.fb.getRawValue());
  }
}
