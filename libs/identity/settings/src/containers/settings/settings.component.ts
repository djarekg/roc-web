import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PushModule } from '@ngrx/component';
import { slideInAnimation } from '@roc-web/core/animations';
import { SidenavComponent, createSidenavRoutes } from '@roc-web/ui/sidenav';

import routes from '../routes';

@Component({
  selector: 'rw-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidenavComponent, PushModule],
})
export class SettingsComponent {
  protected readonly routes = createSidenavRoutes(routes, 'settings');
  protected readonly title$ = inject(ActivatedRoute).title;
}
