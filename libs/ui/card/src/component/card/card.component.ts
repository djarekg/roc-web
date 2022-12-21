import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LetModule } from '@ngrx/component';

@Component({
  selector: 'rw-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LetModule, MatButtonModule, MatCardModule],
})
export class CardComponent {
  @HostBinding('class') readonly classes = 'rw-card';

  @Input() loading: boolean | undefined;
  @Input() title: string | undefined;
}
