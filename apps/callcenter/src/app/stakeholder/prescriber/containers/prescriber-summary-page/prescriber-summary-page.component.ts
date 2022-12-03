import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { CardComponent, selectTitle } from '@roc-web/core';

import { PrescriberDetailComponent } from '../../components';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    MatDividerModule,
    PrescriberDetailComponent,
    PushModule,
  ],
  selector: 'app-prescriber-summary-page',
  standalone: true,
  styleUrls: ['./prescriber-summary-page.component.scss'],
  templateUrl: './prescriber-summary-page.component.html',
})
export default class PrescriberSummaryPageComponent {
  protected readonly title$ = inject(Store).select(selectTitle);
}
