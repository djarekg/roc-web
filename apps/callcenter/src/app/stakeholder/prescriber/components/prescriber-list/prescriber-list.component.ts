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
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subject, takeUntil, tap } from 'rxjs';

import { Prescriber } from '@roc-web/callcenter/stakeholder/prescriber/models';
import { FilterInputComponent } from '@roc-web/core';
import { EntityList, PageChange } from '@roc-web/web';

@Component({
  selector: 'app-prescriber-list',
  standalone: true,
  templateUrl: './prescriber-list.component.html',
  styleUrls: ['./prescriber-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FilterInputComponent,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class PrescriberListComponent implements AfterViewInit, OnDestroy {
  readonly #destroy$ = new Subject<void>();

  protected readonly displayedColumns: string[] = ['id', 'nationalId'];
  protected dataSource = new MatTableDataSource<Readonly<Prescriber>>([]);
  protected pageSize: number = 0;
  protected totalCount: number = 0;

  @Input()
  set prescriberList(list: EntityList<Prescriber> | undefined) {
    this.#setDataSource(list);
  }

  @Output() readonly pageChange = new EventEmitter<PageChange>();
  @Output() readonly pageSort = new EventEmitter<Sort>();

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

  protected onFilterChanged(value: string | null) {
    this.dataSource.filter = value?.trim().toLowerCase() ?? '';
  }

  #pageChange(pageEvent: PageEvent): void {
    const { pageIndex } = pageEvent;
    return this.pageChange.emit({ pageIndex });
  }

  #setDataSource(list: EntityList<Prescriber> | undefined) {
    const { entities = [], pagination } = list ?? {};

    this.dataSource.data = entities;
    this.pageSize = pagination?.pageSize ?? 0;
    this.totalCount = pagination?.totalCount ?? 0;
  }

  #sortChange(sort: Sort) {
    this.paginator?.firstPage();
    this.pageSort.emit({ ...sort });
  }
}
