import { coerceNumberProperty } from '@angular/cdk/coercion';
import { NgFor, NgStyle, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RandomPipe } from '@roc-web/core/shared';

import { SkeletonLoaderComponent } from '../skeleton-loader';

const COLUMN_COUNT = 6;
const ROW_COUNT = 5;

function initializeArray(length: number) {
  return Array(length).fill(0);
}

@Component({
  selector: 'rw-skeleton-table-loader',
  standalone: true,
  templateUrl: './skeleton-table-loader.component.html',
  styleUrls: ['./skeleton-table-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgStyle, PercentPipe, RandomPipe, SkeletonLoaderComponent],
})
export class SkeletonTableLoaderComponent {
  protected columns: number[] = initializeArray(COLUMN_COUNT);
  protected rows: number[] = initializeArray(ROW_COUNT);

  @Input()
  set columnCount(value: number) {
    this.columns = initializeArray(coerceNumberProperty(value, COLUMN_COUNT));
  }

  @Input()
  set rowCount(value: number) {
    this.rows = initializeArray(coerceNumberProperty(value, ROW_COUNT));
  }
}
