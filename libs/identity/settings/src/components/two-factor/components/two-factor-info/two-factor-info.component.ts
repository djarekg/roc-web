import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rw-settings-two-factor-info',
  standalone: true,
  templateUrl: './two-factor-info.component.html',
  styleUrls: ['./two-factor-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TwoFactorInfoComponent {}
