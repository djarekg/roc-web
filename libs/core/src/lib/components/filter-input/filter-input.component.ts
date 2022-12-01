import {
  type AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  type ElementRef,
  EventEmitter,
  type OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  takeUntil,
  tap,
} from 'rxjs';

import { FILTER_INPUT_KEYUP_DELAY } from '../../constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatInputModule],
  selector: 'rw-filter-input',
  standalone: true,
  styleUrls: ['./filter-input.component.scss'],
  templateUrl: './filter-input.component.html',
})
export class FilterInputComponent implements AfterViewInit, OnDestroy {
  readonly #destroy$ = new Subject<void>();

  @Output() readonly filterChange = new EventEmitter<string>();

  @ViewChild('input') protected readonly filterInput:
    | ElementRef<HTMLInputElement>
    | undefined;

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fromEvent<Event>(this.filterInput!.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.#destroy$),
        debounceTime(FILTER_INPUT_KEYUP_DELAY),
        map(event => (event.target as HTMLInputElement).value),
        distinctUntilChanged(),
        tap(value => this.filterChange.emit(value))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }
}
