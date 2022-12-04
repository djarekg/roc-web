import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { RouteProgressBarComponent } from '@roc-web/core/components';
import { LocaleSelectComponent } from '@roc-web/core/i18n';
import {
  ProfileMenuComponent,
  selectIsAuthenticated,
} from '@roc-web/identity/auth';

import { NavbarComponent } from '../../navbar';

@Component({
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
  selector: 'app-header',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected isAuthenticated$ = inject(Store).select(selectIsAuthenticated);
}
