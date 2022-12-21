import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { SkeletonLoaderComponent } from '../skeleton-loader';

@Component({
  selector: 'rw-skeleton-card-form-details-loader',
  standalone: true,
  templateUrl: './skeleton-card-form-details-loader.component.html',
  styleUrls: ['./skeleton-card-form-details-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkeletonLoaderComponent],
})
export class SkeletonCardFormDetailsLoaderComponent {
  @HostBinding('class') readonly classes = 'rw-skeleton-card__form--details--loader';
}
