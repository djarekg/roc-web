import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatStepperModule],
  selector: 'rw-settings-two-factor-process',
  standalone: true,
  styleUrls: ['./two-factor-process.component.scss'],
  templateUrl: './two-factor-process.component.html',
})
export class TwoFactorProcessComponent {}
