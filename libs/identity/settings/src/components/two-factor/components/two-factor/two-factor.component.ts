import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TwoFactorProcessComponent } from '../two-factor-process/two-factor-process.component';
import { TwoFactorStatusComponent } from '../two-factor-status/two-factor-status.component';

@Component({
  selector: 'rw-settings-two-factor',
  standalone: true,
  templateUrl: './two-factor.component.html',
  styleUrls: ['./two-factor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TwoFactorStatusComponent, TwoFactorProcessComponent],
})
export class TwoFactorComponent {}
