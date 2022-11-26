import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';

import {
  createSidenavRoutes,
  selectTitle,
  SidenavComponent,
  SidenavRoute,
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
  protected readonly routes: SidenavRoute[] | null = createSidenavRoutes(
    routes,
    'settings'
  );

  protected title$ = inject(Store).select(selectTitle);
}
