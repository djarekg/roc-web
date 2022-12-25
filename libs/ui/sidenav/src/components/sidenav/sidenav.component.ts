import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TrackByProperty, slideInAnimation } from '@roc-web/core';
import { CardComponent } from '@roc-web/ui/card';

import { type SidenavRoute } from '../../models';

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
    TrackByProperty,
  ],
})
export class SidenavComponent {
  @Input() routes: SidenavRoute[] | null = null;
  @Input() title: string | undefined;
}
