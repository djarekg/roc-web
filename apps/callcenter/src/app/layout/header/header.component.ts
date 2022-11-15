import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {
  LocaleSelectComponent,
  RouteProgressBarComponent,
} from '@roc-web/core';
import { SignoutComponent } from '@roc-web/identity/auth';

import { NavbarComponent } from '../../navbar';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LocaleSelectComponent,
    NavbarComponent,
    MatButtonModule,
    MatIconModule,
    RouteProgressBarComponent,
    SignoutComponent,
  ],
})
export class HeaderComponent {}
