import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { type TwoFactorState, type TwoFactorStateIcon } from '../../models';

const twoFactorStateCLassMap: Record<TwoFactorState, string> = {
  enabled: 'success',
  disabled: 'danger',
};

@Component({
  selector: 'rw-settings-two-factor-status',
  standalone: true,
  templateUrl: './two-factor-status.component.html',
  styleUrls: ['./two-factor-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, TitleCasePipe],
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
