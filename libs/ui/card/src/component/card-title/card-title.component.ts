import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'rw-card-title',
  standalone: true,
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule],
})
export class CardTitleComponent {}
