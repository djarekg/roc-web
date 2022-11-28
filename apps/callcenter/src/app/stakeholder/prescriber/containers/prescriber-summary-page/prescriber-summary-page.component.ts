import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { PrescriberDetailComponent } from '@roc-web/callcenter/stakeholder/prescriber/components';
import { CardComponent, selectTitle } from '@roc-web/core';

@Component({
  selector: 'app-prescriber-summary-page',
  standalone: true,
  templateUrl: './prescriber-summary-page.component.html',
  styleUrls: ['./prescriber-summary-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    MatDividerModule,
    PrescriberDetailComponent,
    PushModule,
  ],
})
export default class PrescriberSummaryPageComponent {
  protected readonly title$ = inject(Store).select(selectTitle);
}
