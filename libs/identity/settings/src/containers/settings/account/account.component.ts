import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { CardComponent } from '@roc-web/core';

import {
  ChangePasswordComponent,
  UserDetailsComponent,
} from '../../../components';

@Component({
  selector: 'rw-settings-account',
  standalone: true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, UserDetailsComponent, ChangePasswordComponent],
})
export class AccountComponent {
  @HostBinding('class') readonly class = 'rw-settings__item';
}
