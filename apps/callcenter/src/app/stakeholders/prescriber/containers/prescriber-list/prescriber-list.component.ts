import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { PaginationOptions } from '@roc-web/web';
import { Observable } from 'rxjs';

import { PrescriberTableComponent } from '../../components';
import { Prescriber } from '../../models';
import {
  findPrescriberPageActions,
  prescribersPageActions,
} from '../../store/actions';
import * as fromPrescribers from '../../store/reducers';

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

  protected prescribers$: Observable<ReadonlyArray<Prescriber>> =
    this.#store.select(fromPrescribers.selectEntities);

  ngOnInit(): void {
    this.#store.dispatch(prescribersPageActions.enter());
  }

  protected onFilter(filter: string): void {
    this.#store.dispatch(
      findPrescriberPageActions.searchPrescribers({ filter: filter })
    );
  }

  protected onPageChanged(options: PaginationOptions): void {
    this.#store.dispatch(prescribersPageActions.changePage({ options }));
  }
}
