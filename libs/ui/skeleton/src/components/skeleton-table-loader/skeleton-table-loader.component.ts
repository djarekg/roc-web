import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SkeletonLoaderComponent } from '../skeleton-loader';

@Component({
  selector: 'rw-skeleton-table-loader',
  standalone: true,
  templateUrl: './skeleton-table-loader.component.html',
  styleUrls: ['./skeleton-table-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, SkeletonLoaderComponent],
})
export class SkeletonTableLoaderComponent {
  @Input() columnCount = 0;
}
