import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardComponent } from '@roc-web/identity';

import { TwoFactorComponent } from '../../../components/two-factor';

@Component({
  selector: 'rw-settings-security',
  standalone: true,
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, TwoFactorComponent],
})
export class SecurityComponent {}
