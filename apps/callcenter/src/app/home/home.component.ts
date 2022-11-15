import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from '../layout';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent],
})
export class HomeComponent {}
