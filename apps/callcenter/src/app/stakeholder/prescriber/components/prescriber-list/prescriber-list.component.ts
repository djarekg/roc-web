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
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

import {
  Prescriber,
  PrescriberPagination,
} from '@roc-web/callcenter/stakeholder/prescriber/models';
import { EntityList, PageChange } from '@roc-web/web';

const FILTER_INPUT_KEYUP_DELAY = 150;

@Component({
  selector: 'app-prescriber-list',
  standalone: true,
  templateUrl: './prescriber-list.component.html',
  styleUrls: ['./prescriber-list.component.scss'],
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
export class PrescriberListComponent implements AfterViewInit, OnDestroy {
  readonly #destroy$ = new Subject<void>();

  protected readonly displayedColumns: string[] = ['id', 'nationalId'];
  protected presribers: Readonly<Prescriber>[] = [];
  protected pageSize: number = 0;
  protected totalCount: number = 0;

  @Input()
  set prescriberList(value: EntityList<Prescriber> | undefined) {
    this.#setDataSource(value);
  }

  @Output() readonly pageChange = new EventEmitter<PageChange>();
  @Output() readonly pageSort = new EventEmitter<Sort>();

  @ViewChild('input') protected readonly filterInput:
    | ElementRef<HTMLInputElement>
    | undefined;
  @ViewChild(MatPaginator) protected readonly paginator:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort) protected readonly sort: MatSort | undefined;

  ngAfterViewInit(): void {
    fromEvent<Event>(this.filterInput!.nativeElement, 'keyup').pipe(
      takeUntil(this.#destroy$),
      debounceTime(FILTER_INPUT_KEYUP_DELAY),
      distinctUntilChanged(),
      switchMap(event => (event.target as HTMLInputElement).value),
      tap(value => this.#filterChanged(value))
    );

    this.sort?.sortChange
      .pipe(
        takeUntil(this.#destroy$),
        tap(() => {
          this.paginator?.firstPage();
          this.#sortChange();
        })
      )
      .subscribe();

    this.paginator?.page
      .pipe(
        takeUntil(this.#destroy$),
        tap(() => this.#pageChange())
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  #filterChanged(value: string) {}

  #pageChange(): void {
    const { pageIndex } = this.paginator!;

    this.pageChange.emit({ pageIndex });
  }

  #sortChange(): void {
    const { active, direction } = this.sort!;

    this.pageSort.emit({ active, direction });
  }

  #setDataSource(data: PrescriberPagination | undefined) {
    const { entities = [], pagination } = data ?? {};

    this.presribers = entities;
    this.pageSize = pagination?.pageSize ?? 0;
    this.totalCount = pagination?.totalCount ?? 0;
  }
}
