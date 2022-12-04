import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { CardComponent } from '@roc-web/core/components';
import { selectTitle } from '@roc-web/core/store';

import { PrescriberAttestationsDetailComponent } from '../../components';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    MatDividerModule,
    PrescriberAttestationsDetailComponent,
    PushModule,
  ],
  selector: 'app-prescriber-attestations-page',
  standalone: true,
  styleUrls: ['./prescriber-attestations-page.component.scss'],
  templateUrl: './prescriber-attestations-page.component.html',
})
export default class PrescriberAttestationsPageComponent {
  protected readonly title$ = inject(Store).select(selectTitle);
}
