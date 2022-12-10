import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import { type NavRoute } from '../../models';

@Component({
  selector: 'rw-ui-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgClass,
    NgFor,
    NgIf,
    RouterLink,
  ],
})
export class NavbarComponent<T = unknown> {
  @Input()
  routes: NavRoute<T>[] = [];
}
