import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { LocaleSelectComponent } from '@roc-web/core/i18n';
import {
  ProfileMenuComponent,
  selectIsAuthenticated,
} from '@roc-web/identity/auth';
import { RouteProgressBarComponent } from '@roc-web/ui/route-progress-bar';

import { NavbarComponent } from '../../navbar';

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
    MatButtonModule,
    MatIconModule,
    NgIf,
    ProfileMenuComponent,
    RouteProgressBarComponent,
  ],
})
export class HeaderComponent {
  protected isAuthenticated$ = inject(Store).select(selectIsAuthenticated);
}
