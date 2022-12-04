import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CardComponent } from '@roc-web/core/components';

import { TwoFactorComponent } from '../../../components';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, TwoFactorComponent],
  selector: 'rw-settings-security',
  standalone: true,
  styleUrls: ['./security.component.scss'],
  templateUrl: './security.component.html',
})
export class SecurityComponent {
  @HostBinding('class') readonly class = 'rw-settings__item';
}
