import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TwoFactorProcessComponent } from '../two-factor-process';
import { TwoFactorStatusComponent } from '../two-factor-status';

@Component({
  selector: 'rw-settings-two-factor',
  standalone: true,
  templateUrl: './two-factor.component.html',
  styleUrls: ['./two-factor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TwoFactorStatusComponent, TwoFactorProcessComponent],
})
export class TwoFactorComponent {}
