import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../animations';
import { CardComponent } from '../card';

import { type SidenavRoute } from './sidenav-route';

@Component({
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
  selector: 'rw-sidenav',
  standalone: true,
  styleUrls: ['./sidenav.component.scss'],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  @Input() routes: SidenavRoute[] | null = null;
  @Input() title: string | undefined;
}
