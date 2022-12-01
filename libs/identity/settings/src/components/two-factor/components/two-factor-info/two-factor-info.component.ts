import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'rw-settings-two-factor-info',
  standalone: true,
  styleUrls: ['./two-factor-info.component.scss'],
  templateUrl: './two-factor-info.component.html',
})
export class TwoFactorInfoComponent {}
