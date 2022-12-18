import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormFieldComponent } from '@roc-web/ui/form-field';
import { Prescriber } from '../../models';

@Component({
  selector: 'app-prescriber-detail',
  standalone: true,
  templateUrl: './prescriber-detail.component.html',
  styleUrls: ['./prescriber-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormFieldComponent],
})
export class PrescriberDetailComponent {
  @Input() prescriber: Readonly<Prescriber> | undefined | null;
}
