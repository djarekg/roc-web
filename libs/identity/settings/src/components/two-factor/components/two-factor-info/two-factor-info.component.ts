import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rw-settings-two-factor-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-factor-info.component.html',
  styleUrls: ['./two-factor-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoFactorInfoComponent {}
