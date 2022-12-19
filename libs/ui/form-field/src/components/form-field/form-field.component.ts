import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'rw-form-field',
  standalone: true,
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class FormFieldComponent {
  #readonly = false;

  @Input() label: string | undefined;

  @Input()
  get readonly(): boolean {
    return this.#readonly;
  }
  set readonly(value: boolean) {
    this.#readonly = coerceBooleanProperty(value);
  }

  @HostBinding('class') readonly classes = 'rw-form-field';
}
