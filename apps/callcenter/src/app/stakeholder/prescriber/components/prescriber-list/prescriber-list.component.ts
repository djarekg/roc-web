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
import { MatTableModule } from '@angular/material/table';
import { Subject, takeUntil, tap } from 'rxjs';

import { NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Prescriber } from '@roc-web/callcenter/stakeholder/prescriber/models';
import { FilterInputComponent } from '@roc-web/core';
import { PageChange, Pagination } from '@roc-web/web';

// TODO: this needs refracted into multiple components

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
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    NgIf,
  ],
})
export class PrescriberListComponent implements AfterViewInit, OnDestroy {
  readonly #destroy$ = new Subject<void>();
  #prescribers: Prescriber[] = [];

  protected readonly displayedColumns: string[] = [
    'externalId',
    'firstName',
    'lastName',
    'nationalId',
    'menu',
  ];

  @Input() loading: boolean | undefined = false;

  @Input()
  get prescribers(): Readonly<Prescriber>[] {
    return this.#prescribers;
  }
  set prescribers(prescribers: Readonly<Prescriber>[] | undefined) {
    this.#prescribers = prescribers ?? [];
  }

  @Input() pagination: Pagination | undefined;

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
