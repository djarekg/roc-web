import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { PushModule } from '@ngrx/component';

import { slideInAnimation } from '@roc-web/core';

@Component({
  selector: 'app-prescriber',
  standalone: true,
  templateUrl: './prescriber-page.component.html',
  styleUrls: ['./prescriber-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    PushModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  animations: [slideInAnimation],
})
export default class PrescriberPageComponent {
  protected readonly title$ = inject(ActivatedRoute).title;
  // readonly #store = inject(Store);

  // protected readonly title$ = this.#store.select(selectTitle);
}
