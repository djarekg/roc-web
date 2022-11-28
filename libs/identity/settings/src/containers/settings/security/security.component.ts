import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CardComponent } from '@roc-web/core';

import { TwoFactorComponent } from '../../../components';
@Component({
  selector: 'rw-settings-security',
  standalone: true,
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, TwoFactorComponent],
})
export class SecurityComponent {
  @HostBinding('class') readonly class = 'rw-settings__item';
}
