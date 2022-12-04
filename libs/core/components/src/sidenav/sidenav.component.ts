import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '@roc-web/core/animations';

import { CardComponent } from '../card';

import { type SidenavRoute } from './sidenav-route';

@Component({
  selector: 'rw-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    NgFor,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
})
export class SidenavComponent {
  @Input() routes: SidenavRoute[] | null = null;
  @Input() title: string | undefined;
}
