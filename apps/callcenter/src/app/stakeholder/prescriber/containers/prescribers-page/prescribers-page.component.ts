import {
  ChangeDetectionStrategy,
  Component,
  type OnInit,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { type Sort } from '@angular/material/sort';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { ScrollableDirective, selectTitle } from '@roc-web/core';
import { type PageChange } from '@roc-web/web';

import { PrescriberListComponent } from '../../components';
import { prescribersPageActions } from '../../store/actions';
import {
  selectLoading,
  selectPagination,
  selectPrescribers,
} from '../../store/reducers';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ScrollableDirective],
  imports: [
    MatButtonModule,
    MatDividerModule,
    PrescriberListComponent,
    PushModule,
  ],
  selector: 'app-prescribers-page',
  standalone: true,
  styleUrls: ['./prescribers-page.component.scss'],
  templateUrl: './prescribers-page.component.html',
})
export default class PrescribersPageComponent implements OnInit {
  readonly #store = inject(Store);

  protected readonly loading$ = this.#store.select(selectLoading);
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

  protected onFilterChanged(filter: string): void {
    this.#store.dispatch(prescribersPageActions.filterChange({ filter }));
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
