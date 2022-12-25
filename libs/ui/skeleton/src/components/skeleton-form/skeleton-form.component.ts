import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { SkeletonComponent } from '../skeleton';

@Component({
  selector: 'rw-skeleton-form',
  standalone: true,
  templateUrl: './skeleton-form.component.html',
  styleUrls: ['./skeleton-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkeletonComponent],
})
export class SkeletonFormComponent {
  @HostBinding('class') protected readonly classes = 'rw-skeleton-form';
}
