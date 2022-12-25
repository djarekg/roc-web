import { NgIf } from '@angular/common';
import {
  type AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  type OnChanges,
  type OnDestroy,
  Output,
  ViewChild,
  inject,
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
import { MatSort, MatSortModule, type Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ContentFill, type PageChange, type ViewModel } from '@roc-web/core';
import { FilterInputComponent } from '@roc-web/ui/filter-input';
import { SkeletonTableComponent } from '@roc-web/ui/skeleton';
import { Subject, takeUntil, tap } from 'rxjs';

import { type PrescriberList } from '../../models';

@Component({
  selector: 'app-prescriber-list',
  standalone: true,
  templateUrl: './prescriber-list.component.html',
  styleUrls: ['./prescriber-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ContentFill,
    FilterInputComponent,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgIf,
    SkeletonTableComponent,
  ],
})
export class PrescriberListComponent
  implements AfterViewInit, OnDestroy, OnChanges
{
  readonly #changeDectorRef = inject(ChangeDetectorRef);
  readonly #destroy$ = new Subject<void>();

  protected readonly displayedColumns: string[] = [
    'externalId',
    'firstName',
    'lastName',
    'nationalId',
    'menu',
  ];

  @Input() viewModel: ViewModel<PrescriberList> | undefined;

  @Output() readonly edit = new EventEmitter<string>();
  @Output() readonly filterChange = new EventEmitter<string>();
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
        tap(sort => this.#sortChange(sort)),
      )
      .subscribe();

    this.paginator?.page
      .pipe(
        takeUntil(this.#destroy$),
        tap(pageEvent => this.#pageChange(pageEvent)),
      )
      .subscribe();
  }

  ngOnChanges(): void {
    this.#changeDectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  protected onEdit(id: string) {
    this.edit.emit(id);
  }

  protected onFilterChanged(filter: string) {
    this.filterChange.emit(filter);
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
