import { NgIf } from '@angular/common';
import {
  type AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  type OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatPaginator,
  MatPaginatorModule,
  type PageEvent,
} from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, type Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FilterInputComponent } from '@roc-web/core';
import { type PageChange } from '@roc-web/web/shared';
import { Subject, takeUntil, tap } from 'rxjs';

import { type PrescriberViewModel } from '../../models/prescriber-view-model';

// TODO: this needs refracted into multiple components

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FilterInputComponent,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    NgIf,
  ],
  selector: 'app-prescriber-list',
  standalone: true,
  styleUrls: ['./prescriber-list.component.scss'],
  templateUrl: './prescriber-list.component.html',
})
export class PrescriberListComponent implements AfterViewInit, OnDestroy {
  readonly #destroy$ = new Subject<void>();

  protected readonly displayedColumns: string[] = [
    'externalId',
    'firstName',
    'lastName',
    'nationalId',
    'menu',
  ];

  @Input() viewModel: PrescriberViewModel | undefined;

  @Output() readonly editPrescriber = new EventEmitter<string>();
  @Output() readonly filterChange = new EventEmitter<string>();
  @Output() readonly pageChange = new EventEmitter<PageChange>();
  @Output() readonly pageSort = new EventEmitter<Sort>();
  @Output() readonly viewPrescriber = new EventEmitter<string>();

  @ViewChild(MatPaginator) protected readonly paginator:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort) protected readonly sort: MatSort | undefined;

  ngAfterViewInit(): void {
    this.sort?.sortChange
      .pipe(
        takeUntil(this.#destroy$),
        tap(sort => this.#sortChange(sort))
      )
      .subscribe();

    this.paginator?.page
      .pipe(
        takeUntil(this.#destroy$),
        tap(pageEvent => this.#pageChange(pageEvent))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  protected onEditPrescriber(id: string) {
    this.editPrescriber.emit(id);
  }

  protected onFilterChanged(filter: string) {
    this.filterChange.emit(filter);
  }

  protected onViewPrescriber(id: string) {
    this.viewPrescriber.emit(id);
  }

  #pageChange(pageEvent: PageEvent): void {
    return this.pageChange.emit({ pageIndex: pageEvent.pageIndex });
  }

  #sortChange(sort: Sort) {
    this.paginator?.firstPage();
    this.pageSort.emit({ ...sort });
  }
}
