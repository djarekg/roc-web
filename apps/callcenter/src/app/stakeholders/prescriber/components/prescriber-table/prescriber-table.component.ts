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

import { PaginationOptions } from '@roc-web/web';

import { Prescriber } from '../../models';

@Component({
  selector: 'app-prescriber-table',
  standalone: true,
  templateUrl: './prescriber-table.component.html',
  styleUrls: ['./prescriber-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class PrescriberTableComponent implements AfterViewInit, OnDestroy {
  readonly #destroyed$ = new Subject<void>();
  #prescribers: ReadonlyArray<Prescriber> = [];

  protected displayedColumns: string[] = ['id'];

  protected applyFilter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.filtered.emit(filter);
  }

  protected data = new MatTableDataSource<Prescriber>([]);

  @Input()
  get prescribers(): ReadonlyArray<Prescriber> | undefined {
    return this.#prescribers;
  }
  set prescribers(value: ReadonlyArray<Prescriber> | undefined) {
    this.#prescribers = value ?? [];
    this.data.data = value as Mutable<Prescriber[]>;
  }

  @Output() readonly filtered = new EventEmitter<string>();
  @Output() readonly pageChanged = new EventEmitter<PaginationOptions>();

  @ViewChild(MatPaginator) protected paginator!: MatPaginator;
  @ViewChild(MatSort) protected sort!: MatSort;

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      tap(() => {
        const { pageIndex, pageSize } = this.paginator;
        const { active, direction } = this.sort;

        this.pageChanged.emit({
          pageIndex,
          pageSize,
          sort: { active, direction },
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.#destroyed$.next();
    this.#destroyed$.complete();
  }
}
