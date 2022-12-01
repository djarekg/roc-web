import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { type TwoFactorState, type TwoFactorStateIcon } from '../../models';

const twoFactorStateCLassMap: Record<TwoFactorState, string> = {
  disabled: 'danger',
  enabled: 'success',
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, TitleCasePipe],
  selector: 'rw-settings-two-factor-status',
  standalone: true,
  styleUrls: ['./two-factor-status.component.scss'],
  templateUrl: './two-factor-status.component.html',
})
export class TwoFactorStatusComponent {
  protected get twoFactorState(): TwoFactorState {
    return this.twoFactorEnabled ? 'enabled' : 'disabled';
  }
  protected get twoFactorStateActionIcon(): TwoFactorStateIcon {
    return this.twoFactorEnabled ? 'check' : 'clear';
  }
  protected get twoFactorStateClass(): string {
    return `mat-${twoFactorStateCLassMap[this.twoFactorState]}`;
  }

  @Input() twoFactorEnabled: boolean = false;
}
