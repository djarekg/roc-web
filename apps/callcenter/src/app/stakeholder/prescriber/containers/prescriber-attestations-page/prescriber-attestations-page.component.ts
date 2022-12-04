import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { selectTitle } from '@roc-web/core/store';
import { CardComponent } from '@roc-web/ui/card';

import { PrescriberAttestationsDetailComponent } from '../../components';

@Component({
  selector: 'app-prescriber-attestations-page',
  standalone: true,
  templateUrl: './prescriber-attestations-page.component.html',
  styleUrls: ['./prescriber-attestations-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    MatDividerModule,
    PrescriberAttestationsDetailComponent,
    PushModule,
  ],
})
export default class PrescriberAttestationsPageComponent {
  protected readonly title$ = inject(Store).select(selectTitle);
}
