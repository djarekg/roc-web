import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChangePasswordFormComponent } from '../change-password-form';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChangePasswordFormComponent],
  selector: 'rw-settings-change-password',
  standalone: true,
  styleUrls: ['./change-password.component.scss'],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {}
