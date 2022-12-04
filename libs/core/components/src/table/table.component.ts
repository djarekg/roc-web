import { NgFor, NgIf } from '@angular/common';
import {
  type AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
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
import { type PageChange, type ViewModel } from '@roc-web/core/shared';
import { Subject, takeUntil, tap } from 'rxjs';

import { type TableColumn } from './models/table-column';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    NgIf,
    NgFor,
  ],
  selector: 'rw-table',
  standalone: true,
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})
export class TableComponent<T extends object>
  implements AfterViewInit, OnDestroy
{
  @HostBinding('class') class = 'mat-elevation-z8';

  #columns: TableColumn[] = [];
  readonly #destroy$ = new Subject<void>();
  #items: T[] = [];

  protected displayedColumns: string[] = [];

  @Input()
  set columns(columns: TableColumn[]) {
    this.#columns = columns;
    this.displayedColumns = columns.map(column => column.propertyName);
  }

  @Input() viewModel: ViewModel<T> | undefined;

  @Output() readonly edit = new EventEmitter<string>();
  @Output() readonly pageChange = new EventEmitter<PageChange>();
  @Output() readonly pageSort = new EventEmitter<Sort>();
  @Output() readonly view = new EventEmitter<string>();

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

  protected onEdit(id: string) {
    this.edit.emit(id);
  }

  protected onView(id: string) {
    this.view.emit(id);
  }

  #pageChange(pageEvent: PageEvent): void {
    return this.pageChange.emit({ pageIndex: pageEvent.pageIndex });
  }

  #sortChange(sort: Sort) {
    this.paginator?.firstPage();
    this.pageSort.emit({ ...sort });
  }
}
