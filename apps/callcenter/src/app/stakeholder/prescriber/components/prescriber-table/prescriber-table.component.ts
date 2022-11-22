import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
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
import { MatTableModule } from '@angular/material/table';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  merge,
  startWith,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

import {
  Prescriber,
  PrescriberPagination,
  PrescriberPaginationOptions,
} from '@roc-web/callcenter/stakeholder/prescriber/models';

const FILTER_INPUT_KEYUP_DELAY = 150;

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

  protected readonly displayedColumns: string[] = ['id', 'nationalId'];
  protected presribers: Readonly<Prescriber>[] = [];
  protected pageSize: number = 0;
  protected totalCount: number = 0;

  @Input()
  set prescriberPagination(value: PrescriberPagination | undefined) {
    this.#setDataSource(value);
  }

  @Output() readonly filterChange = new EventEmitter<string>();
  @Output() readonly pageChange =
    new EventEmitter<PrescriberPaginationOptions>();

  @ViewChild('input') protected readonly filterInput: ElementRef | undefined;
  @ViewChild(MatPaginator) protected readonly paginator:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort) protected readonly sort: MatSort | undefined;

  ngAfterViewInit(): void {
    const filterInputKeyUp = fromEvent(
      this.filterInput!.nativeElement,
      'keyup'
    ).pipe(
      takeUntil(this.#destroy$),
      debounceTime(FILTER_INPUT_KEYUP_DELAY),
      distinctUntilChanged()
    );

    this.sort!.sortChange.pipe(
      takeUntil(this.#destroy$),
      tap(() => this.paginator!.firstPage())
    ).subscribe();

    merge(this.sort!.sortChange, this.paginator!.page, filterInputKeyUp)
      .pipe(
        takeUntil(this.#destroy$),
        startWith({}),
        tap(() => {
          const { pageIndex, pageSize } = this.paginator!;
          const { active, direction } = this.sort!;
          const filter = (this.filterInput!.nativeElement as HTMLInputElement)
            .value;

          this.pageChange.emit({
            filter,
            lastName: null,
            nationalId: null,
            pageIndex,
            pageSize,
            sort: { active, direction },
            stakeholderId: null,
          });
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  protected onFilterChange(value: string) {
    this.filterChange.emit(value);
  }

  #setDataSource(data: PrescriberPagination | undefined) {
    const { entities = [], pagination } = data ?? {};

    this.presribers = entities;
    this.pageSize = pagination?.pageSize ?? 0;
    this.totalCount = pagination?.totalCount ?? 0;
  }
}
