import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SkeletonLoaderComponent } from '../skeleton-loader';

@Component({
  selector: 'rw-skeleton-form-details-loader',
  standalone: true,
  templateUrl: './skeleton-form-details-loader.component.html',
  styleUrls: ['./skeleton-form-details-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkeletonLoaderComponent],
})
export class SkeletonFormDetailsLoaderComponent {}
