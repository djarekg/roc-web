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
import { type PageChange, ScrollableDirective } from '@roc-web/core/shared';
import { selectTitle } from '@roc-web/core/store';

import { PrescriberListComponent } from '../../components';
import { prescribersPageActions } from '../../store/actions';
import { selectViewModel } from '../../store/reducers';

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

  protected readonly viewModel$ = this.#store.select(selectViewModel);
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
