import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'rw-settings-two-factor-recovery-codes',
  standalone: true,
  styleUrls: ['./two-factor-recovery-codes.component.scss'],
  templateUrl: './two-factor-recovery-codes.component.html',
})
export class TwoFactorRecoveryCodesComponent {}
