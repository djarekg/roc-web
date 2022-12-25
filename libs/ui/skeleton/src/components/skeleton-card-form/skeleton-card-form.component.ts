import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { SkeletonComponent } from '../skeleton';

@Component({
  selector: 'rw-skeleton-card-form',
  standalone: true,
  templateUrl: './skeleton-card-form.component.html',
  styleUrls: ['./skeleton-card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkeletonComponent],
})
export class SkeletonCardFormComponent {
  @HostBinding('class') readonly classes = 'rw-skeleton-card__form';
}
