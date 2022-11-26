import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PushModule } from '@ngrx/component';

import {
  createSidenavRoutes,
  SidenavComponent,
  SidenavRoute,
  slideInAnimation,
} from '@roc-web/core';

import routes from '../routes';

@Component({
  selector: 'app-prescriber',
  standalone: true,
  templateUrl: './prescriber-page.component.html',
  styleUrls: ['./prescriber-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
  imports: [PushModule, SidenavComponent],
})
export default class PrescriberPageComponent {
  protected readonly routes: SidenavRoute[] | null = createSidenavRoutes(
    routes,
    ':id'
  );

  protected readonly title$ = inject(ActivatedRoute).title;
}
