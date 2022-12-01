import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CardComponent } from '@roc-web/core';

import {
  ChangePasswordComponent,
  UserDetailsComponent,
} from '../../../components';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, UserDetailsComponent, ChangePasswordComponent],
  selector: 'rw-settings-account',
  standalone: true,
  styleUrls: ['./account.component.scss'],
  templateUrl: './account.component.html',
})
export class AccountComponent {
  @HostBinding('class') readonly class = 'rw-settings__item';
}
