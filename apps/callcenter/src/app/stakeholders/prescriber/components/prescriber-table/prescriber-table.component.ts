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
import { MatTableModule } from '@angular/material/table';
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

  protected displayedColumns: string[] = ['id'];

  // protected applyFilter(event: Event) {
  //   const filter = (event.target as HTMLInputElement).value;
  //   this.prescribers = this.#prescribers.filter(prescriber =>
  //     new RegExp(filter, 'i').test(Object.values(prescriber).join())
  //   );
  // }

  @Input()
  // accessor prescribers: ReadonlyArray<Prescriber> = [];
  get prescribers(): ReadonlyArray<Prescriber> {
    return this.#prescribers;
  }
  set prescribers(value: ReadonlyArray<Prescriber>) {
    this.#prescribers = value;
  }
  #prescribers: ReadonlyArray<Prescriber> = [];
  @ViewChild(MatPaginator) protected paginator!: MatPaginator;
  @ViewChild(MatSort) protected sort!: MatSort;
  @Output() readonly pageChanged = new EventEmitter<PaginationOptions>();

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      tap(() => {
        const { pageIndex, pageSize } = this.paginator;
        const { active, direction } = this.sort;

        this.pageChanged.emit({
          filter: '',
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
