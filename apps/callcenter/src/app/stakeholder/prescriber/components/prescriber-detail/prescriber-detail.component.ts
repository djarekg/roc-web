import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormFieldComponent, InputComponent } from '@roc-web/ui/form-field';

import { type Prescriber } from '../../models';

@Component({
  selector: 'app-prescriber-detail',
  standalone: true,
  templateUrl: './prescriber-detail.component.html',
  styleUrls: ['./prescriber-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormFieldComponent, InputComponent],
})
export class PrescriberDetailComponent {
  @Input() prescriber: Readonly<Prescriber> | null | undefined;
}
