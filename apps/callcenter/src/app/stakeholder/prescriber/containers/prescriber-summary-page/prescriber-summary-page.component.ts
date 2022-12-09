import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { selectTitle } from '@roc-web/core/state';
import { CardComponent } from '@roc-web/ui/card';

import { PrescriberDetailComponent } from '../../components';

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
