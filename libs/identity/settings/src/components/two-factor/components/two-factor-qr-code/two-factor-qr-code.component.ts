import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rw-settings-two-factor-qr-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-factor-qr-code.component.html',
  styleUrls: ['./two-factor-qr-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoFactorQrCodeComponent {}
