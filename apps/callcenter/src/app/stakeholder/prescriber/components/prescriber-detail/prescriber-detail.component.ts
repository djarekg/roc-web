import { ChangeDetectionStrategy, Component, Input, type OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, type FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { type Prescriber } from '../../models';

interface TypedForm
  extends FormGroup<{
    externalId: FormControl<number | null>;
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
  }> {}

@Component({
  selector: 'app-prescriber-detail',
  standalone: true,
  templateUrl: './prescriber-detail.component.html',
  styleUrls: ['./prescriber-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatInputModule, ReactiveFormsModule],
})
export class PrescriberDetailComponent implements OnInit {
  protected readonly form: TypedForm = inject(FormBuilder).group({
    externalId: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
  });

  @Input()
  set prescriber(value: Readonly<Prescriber> | null | undefined) {
    const { stakeholder } = value ?? {};
    const { externalId, firstName, lastName } = stakeholder ?? {};

    this.form.patchValue({ externalId, firstName, lastName });
  }

  ngOnInit() {
    this.form.disable();
  }
}
