import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { MatSidenavModule } from '@angular/material/sidenav';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-prescriber',
  standalone: true,
  templateUrl: './prescriber-page.component.html',
  styleUrls: ['./prescriber-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref,
  ],
})
export default class PrescriberPageComponent {}
