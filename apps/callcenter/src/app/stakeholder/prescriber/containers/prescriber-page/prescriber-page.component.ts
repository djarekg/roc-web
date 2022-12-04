import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PushModule } from '@ngrx/component';
import { slideInAnimation } from '@roc-web/core/animations';
import {
  SidenavComponent,
  createSidenavRoutes,
} from '@roc-web/core/components';

import { routes } from '../routes';

@Component({
  selector: 'app-prescriber',
  standalone: true,
  templateUrl: './prescriber-page.component.html',
  styleUrls: ['./prescriber-page.component.scss'],
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, SidenavComponent],
})
export default class PrescriberPageComponent {
  protected readonly routes = createSidenavRoutes(routes, ':id', 'assignment');
  protected readonly title$ = inject(ActivatedRoute).title;
}
