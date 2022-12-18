import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { selectTitle } from '@roc-web/core/store';
import { CardComponent } from '@roc-web/ui/card';

import { PrescriberDetailComponent } from '../../components';
import { prescribersApiActions, selectSelected } from '../../store';

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
  protected readonly prescriber$ = this.#store.select(selectSelected);
  protected readonly title$ = this.#store.select(selectTitle);
}
