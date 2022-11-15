import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'rw-settings-two-factor-process',
  standalone: true,
  templateUrl: './two-factor-process.component.html',
  styleUrls: ['./two-factor-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatStepperModule],
})
export class TwoFactorProcessComponent {}
