import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Sort } from '@angular/material/sort';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';

import {
  PrescriberListComponent,
  prescribersPageActions,
} from '@roc-web/callcenter/stakeholder/prescriber/components';
import { ScrollableDirective, selectTitle } from '@roc-web/core';
import { PageChange } from '@roc-web/web';
import { selectPagination, selectPrescribers } from '../../state/reducers';

@Component({
  selector: 'app-prescriber-list-page',
  standalone: true,
  templateUrl: './prescriber-list-page.component.html',
  styleUrls: ['./prescriber-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatDividerModule,
    PrescriberListComponent,
    PushModule,
  ],
  hostDirectives: [ScrollableDirective],
})
export default class PrescriberListPageComponent implements OnInit {
  readonly #store = inject(Store);

  protected readonly prescribers$ = this.#store.select(selectPrescribers);
  protected readonly pagination$ = this.#store.select(selectPagination);
  // protected readonly sort$ = this.#store.select(selectSort);
  protected readonly title$ = this.#store.select(selectTitle);

  ngOnInit(): void {
    this.#store.dispatch(prescribersPageActions.loadPrescribers());
  }

  protected onEditPrescriber(id: string): void {
    this.#store.dispatch(prescribersPageActions.editPrescriber({ id }));
  }

  protected onPageChange(event: PageChange): void {
    this.#store.dispatch(prescribersPageActions.changePage(event));
  }

  protected onPageSort(event: Sort): void {
    this.#store.dispatch(prescribersPageActions.sortPage(event));
  }

  protected onViewPrescriber(id: string): void {
    this.#store.dispatch(prescribersPageActions.viewPrescriber({ id }));
  }
}
