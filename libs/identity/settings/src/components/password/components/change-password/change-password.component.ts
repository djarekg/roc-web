import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChangePasswordFormComponent } from '../change-password-form';

@Component({
  selector: 'rw-settings-change-password',
  standalone: true,
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChangePasswordFormComponent],
})
export class ChangePasswordComponent {}
