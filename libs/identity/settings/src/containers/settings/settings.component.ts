import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
    RouterLinkActive,
    RouterLink,
    RouterOutlet
} from '@angular/router';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { selectTitle, slideInAnimation } from '@roc-web/core';

@Component({
  selector: 'rw-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    PushModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
  animations: [slideInAnimation],
})
export class SettingsComponent {
  protected title$ = inject(Store).select(selectTitle);
}
