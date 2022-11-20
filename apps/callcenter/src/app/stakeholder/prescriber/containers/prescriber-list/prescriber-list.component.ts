import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PrescriberTableComponent } from '@roc-web/callcenter/stakeholder/prescriber/components';
import { Prescriber } from '@roc-web/callcenter/stakeholder/prescriber/models';
import {
  fromPrescribers,
  prescriberActions,
} from '@roc-web/callcenter/stakeholder/prescriber/store';
import { ImmutableArray } from '@roc-web/core';
import { PaginationOptions } from '@roc-web/web';

@Component({
  selector: 'app-prescriber-list',
  standalone: true,
  templateUrl: './prescriber-list.component.html',
  styleUrls: ['./prescriber-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, PrescriberTableComponent],
})
export class PrescriberListComponent implements OnInit {
  readonly #store = inject(Store);

  protected prescribers$: Observable<ImmutableArray<Prescriber>> =
    this.#store.select(fromPrescribers.selectEntities);

  ngOnInit(): void {
    this.#store.dispatch(prescriberActions.prescribersPageActions.enter());
  }

  protected onFilter(filter: string): void {
    this.#store.dispatch(
      prescriberActions.findPrescriberPageActions.searchPrescribers({
        filter: filter,
      })
    );
  }

  protected onPageChanged(options: PaginationOptions): void {
    this.#store.dispatch(
      prescriberActions.prescribersPageActions.changePage({ options })
    );
  }
}
