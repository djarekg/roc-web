import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { CardComponent, selectTitle } from '@roc-web/core';

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
  readonly #store = inject(Store);

  protected readonly title$ = this.#store.select(selectTitle);
}
