import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TwoFactorProcessComponent } from '../two-factor-process';
import { TwoFactorStatusComponent } from '../two-factor-status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TwoFactorStatusComponent, TwoFactorProcessComponent],
  selector: 'rw-settings-two-factor',
  standalone: true,
  styleUrls: ['./two-factor.component.scss'],
  templateUrl: './two-factor.component.html',
})
export class TwoFactorComponent {}
