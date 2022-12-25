import { coerceNumberProperty } from '@angular/cdk/coercion';
import { NgClass, NgFor, NgIf, NgStyle, PercentPipe } from '@angular/common';
import {
  type AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  type DoCheck,
  ElementRef,
  HostBinding,
  Input,
  inject,
} from '@angular/core';
import { ContentFill, RandomPipe } from '@roc-web/core';

import { SkeletonComponent } from '../skeleton';

const COLUMN_COUNT = 6;
const DEFAULT_HEADER_ROW_HEIGHT = 34;
const DEFAULT_ROW_HEIGHT = 24;

function initializeArray(length: number) {
  return Array(length).fill(0);
}

@Component({
  selector: 'rw-skeleton-table',
  standalone: true,
  templateUrl: './skeleton-table.component.html',
  styleUrls: ['./skeleton-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    NgStyle,
    PercentPipe,
    RandomPipe,
    SkeletonComponent,
  ],
  hostDirectives: [ContentFill],
})
export class SkeletonTableComponent implements DoCheck, AfterViewChecked {
  @HostBinding('class') protected readonly classes = 'rw-skeleton-table';
  @HostBinding('style.grid-template-rows') protected gridTemplateRows:
    | string
    | undefined;

  readonly #changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  readonly #elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  protected viewChecked = false;
  protected columns: number[] = initializeArray(COLUMN_COUNT);
  protected rows: number[] | undefined;

  @Input()
  set columnCount(value: number) {
    this.columns = initializeArray(coerceNumberProperty(value, COLUMN_COUNT));
  }

  ngDoCheck(): void {
    if (this.viewChecked && !this.rows) {
      const height = this.#elementRef.nativeElement.offsetHeight;

      // calculate the number of rows (minus the header row) to display
      // based on the height of the container
      const rowCount = Math.floor((height - 30) / DEFAULT_ROW_HEIGHT) - 1;

      // calculate the row height based on the number of rows
      // by adding the number of rows divided by the difference between
      // the header row height and the default row height
      const rowHeight = DEFAULT_ROW_HEIGHT + Math.floor((rowCount - 1) / 8);

      // set css grid-template-rows to the newly calculated values
      this.gridTemplateRows = `
        [header] ${DEFAULT_HEADER_ROW_HEIGHT}px ${rowHeight}px
      `;

      this.rows = initializeArray(rowCount);
      this.#changeDetectorRef.detectChanges();
    }
  }

  ngAfterViewChecked(): void {
    this.viewChecked = true;
  }
}
