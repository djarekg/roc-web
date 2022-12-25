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
import {
  ContentFill,
  type PageChange,
  RouteContent,
  RouteContentHeader,
  Scrollable,
  selectTitle,
} from '@roc-web/core';

import { PrescriberListComponent } from '../../components';
import { prescribersPageActions, selectViewModel } from '../../store';

@Component({
  selector: 'app-prescribers-page',
  standalone: true,
  templateUrl: './prescribers-page.component.html',
  styleUrls: ['./prescribers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [RouteContent, Scrollable],
  imports: [
    ContentFill,
    MatButtonModule,
    MatDividerModule,
    PrescriberListComponent,
    PushModule,
    RouteContentHeader,
  ],
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
