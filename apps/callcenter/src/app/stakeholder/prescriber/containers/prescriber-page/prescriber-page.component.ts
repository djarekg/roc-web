import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-prescriber',
  standalone: true,
  templateUrl: './prescriber-page.component.html',
  styleUrls: ['./prescriber-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, RouterOutlet, RouterLinkWithHref],
})
export default class PrescriberPageComponent {}
