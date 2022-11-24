import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';

import {
  collectionPageActions,
  PrescriberListComponent,
} from '@roc-web/callcenter/stakeholder/prescriber/components';
import { PageChange } from '@roc-web/web';

import { selectAllPrescribersWithPaginationSort } from '../../store/reducers';

@Component({
  selector: 'app-prescriber-collection',
  standalone: true,
  templateUrl: './prescriber-collection.component.html',
  styleUrls: ['./prescriber-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, PrescriberListComponent],
})
export default class PrescriberCollectionComponent implements OnInit {
  readonly #store = inject(Store);

  protected prescribers$ = this.#store.select(
    selectAllPrescribersWithPaginationSort
  );

  ngOnInit(): void {
    this.#store.dispatch(collectionPageActions.enter());
  }

  protected onPageChange(event: PageChange): void {
    this.#store.dispatch(collectionPageActions.changePage(event));
  }

  protected onPageSort(event: Sort): void {
    this.#store.dispatch(collectionPageActions.sortPage(event));
  }
}
