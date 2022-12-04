import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

export type AlertType =
  | 'danger'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'rw-alert',
  standalone: true,
  styleUrls: ['./alert.component.scss'],
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  @Input() type: AlertType = 'info';
  @HostBinding('att.role') role = 'alert';
  @HostBinding('attr.class') get typeClass() {
    return `rw-alert-${this.type}`;
  }
}
