import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { type AlertType } from '../../types';

@Component({
  selector: 'rw-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() type: AlertType = 'info';
  @HostBinding('att.role') role = 'alert';
  @HostBinding('attr.class') get typeClass() {
    return `rw-alert-${this.type}`;
  }
}
