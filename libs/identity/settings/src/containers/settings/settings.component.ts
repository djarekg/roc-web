import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PushModule } from '@ngrx/component';
import {
  SidenavComponent,
  createSidenavRoutes,
  slideInAnimation,
} from '@roc-web/core';

import routes from '../routes';

@Component({
  selector: 'rw-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidenavComponent, PushModule],
  animations: [slideInAnimation],
})
export class SettingsComponent {
  protected readonly routes = createSidenavRoutes(routes, 'settings');
  protected readonly title$ = inject(ActivatedRoute).title;
}
