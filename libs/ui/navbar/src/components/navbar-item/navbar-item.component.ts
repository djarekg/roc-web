import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import { type NavRoute } from '../../models';

@Component({
  selector: 'rw-navbar-item',
  standalone: true,
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
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
export class NavbarItemComponent<T> {
  @Input() route: NavRoute<T> | undefined;
}
