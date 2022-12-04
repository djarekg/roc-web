import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rw-settings-two-factor-recovery-codes',
  standalone: true,
  templateUrl: './two-factor-recovery-codes.component.html',
  styleUrls: ['./two-factor-recovery-codes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TwoFactorRecoveryCodesComponent {}
