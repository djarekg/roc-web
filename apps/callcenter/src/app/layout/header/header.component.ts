import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { LocaleSelectComponent } from '@roc-web/core/i18n';
import {
  ProfileMenuComponent,
  RwIfHasRole,
  selectIsAuthenticated,
} from '@roc-web/identity/auth';
import { NavbarComponent, NavbarItemComponent } from '@roc-web/ui/navbar';
import { RouteProgressBarComponent } from '@roc-web/ui/route-progress-bar';

import { navRoutes } from '../nav-routes';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    LocaleSelectComponent,
    NavbarComponent,
    NavbarItemComponent,
    MatButtonModule,
    MatIconModule,
    NgFor,
    NgIf,
    ProfileMenuComponent,
    RouteProgressBarComponent,
    RwIfHasRole,
  ],
})
export class HeaderComponent {
  protected isAuthenticated$ = inject(Store).select(selectIsAuthenticated);
  protected readonly routes = navRoutes;
}
