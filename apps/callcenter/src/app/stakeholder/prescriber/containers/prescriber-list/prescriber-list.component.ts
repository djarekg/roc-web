import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';

import {
  findPrescriberPageActions,
  PrescriberPaginationOptions,
  prescribersPageActions,
  PrescriberTableComponent,
} from '@roc-web/callcenter/stakeholder/prescriber/components';
import { fromPrescribers } from '@roc-web/callcenter/stakeholder/prescriber/store';

@Component({
  selector: 'app-prescriber-list',
  standalone: true,
  templateUrl: './prescriber-list.component.html',
  styleUrls: ['./prescriber-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, PrescriberTableComponent],
})
export default class PrescriberListComponent implements OnInit {
  readonly #store = inject(Store);

  protected prescribers$ = this.#store.select(fromPrescribers.selectEntities);

  ngOnInit(): void {
    this.#store.dispatch(prescribersPageActions.enter());
  }

  protected onFiltered(filter: string): void {
    this.#store.dispatch(
      findPrescriberPageActions.searchPrescribers({
        filter: filter,
      })
    );
  }

  protected onPageChanged(options: PrescriberPaginationOptions): void {
    this.#store.dispatch(prescribersPageActions.changePage({ options }));
  }
}
