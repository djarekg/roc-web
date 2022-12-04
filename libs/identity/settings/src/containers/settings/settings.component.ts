import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PushModule } from '@ngrx/component';
import { slideInAnimation } from '@roc-web/core/animations';
import {
  SidenavComponent,
  createSidenavRoutes,
} from '@roc-web/core/components';

import routes from '../routes';

@Component({
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidenavComponent, PushModule],
  selector: 'rw-settings',
  standalone: true,
  styleUrls: ['./settings.component.scss'],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  protected readonly routes = createSidenavRoutes(routes, 'settings');
  protected readonly title$ = inject(ActivatedRoute).title;
}
