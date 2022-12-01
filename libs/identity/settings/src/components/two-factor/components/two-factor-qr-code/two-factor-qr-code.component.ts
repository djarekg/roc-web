import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'rw-settings-two-factor-qr-code',
  standalone: true,
  styleUrls: ['./two-factor-qr-code.component.scss'],
  templateUrl: './two-factor-qr-code.component.html',
})
export class TwoFactorQrCodeComponent {}
