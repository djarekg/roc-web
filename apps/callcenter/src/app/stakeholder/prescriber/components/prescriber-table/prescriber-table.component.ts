import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { merge, startWith, Subject, tap } from 'rxjs';

import {
  Prescriber,
  PrescriberPagination,
  PrescriberPaginationOptions,
} from '@roc-web/callcenter/stakeholder/prescriber/models';
import { PaginationResponse } from '@roc-web/web';

@Component({
  selector: 'app-prescriber-table',
  standalone: true,
  templateUrl: './prescriber-table.component.html',
  styleUrls: ['./prescriber-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class PrescriberTableComponent implements AfterViewInit, OnDestroy {
  readonly #destroy$ = new Subject<void>();

  protected displayedColumns: string[] = ['id', 'nationalId'];

  protected applyFilter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.filterChange.emit(filter);
  }

  protected dataSource = new MatTableDataSource<Prescriber>([]);

  @Input()
  set prescriberPagination(value: PrescriberPagination | undefined) {
    this.#setDataSource(value);
  }

  @Output() readonly filterChange = new EventEmitter<string>();
  @Output() readonly pageChange =
    new EventEmitter<PrescriberPaginationOptions>();

  @ViewChild(MatPaginator) protected paginator!: MatPaginator;
  @ViewChild(MatSort) protected sort!: MatSort;

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      tap(() => {
        const { pageIndex, pageSize } = this.paginator;
        const { active, direction } = this.sort;

        this.pageChange.emit({
          filter: null,
          lastName: null,
          nationalId: null,
          pageIndex,
          pageSize,
          sort: { active, direction },
          stakeholderId: null,
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  #setPaginator(value: PaginationResponse) {
    if (this.paginator) {
      const paginator = this.paginator;
      paginator.pageIndex = 0;
      paginator.pageSize = 0;
      paginator.length = 0;
    }
  }

  #setDataSource(value: PrescriberPagination | undefined) {
    if (!value) {
      // this.#resetDataSource();
      return;
    }

    const entities = value.entities;
    const { pageIndex, pageSize, totalCount } = value.pagination;

    this.dataSource.data = entities;
    this.paginator.pageIndex = pageIndex;
    this.paginator.pageSize = pageSize;
    this.paginator.length = totalCount;
  }
}
