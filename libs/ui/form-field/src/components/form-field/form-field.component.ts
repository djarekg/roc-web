import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { stringify } from '@roc-web/core';

@Component({
  selector: 'rw-form-field',
  standalone: true,
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class FormFieldComponent {
  @HostBinding('class') readonly hostClass = 'rw-form-field';

  #label: string | undefined;
  #value: string | undefined;

  @Input()
  get label(): string | undefined {
    return this.#label;
  }
  set label(value: string | unknown | undefined) {
    this.#label = stringify(value);
  }

  @Input()
  get value(): string | undefined {
    return this.#value;
  }
  set value(value: string | unknown | undefined) {
    this.#value = stringify(value);
  }
}
