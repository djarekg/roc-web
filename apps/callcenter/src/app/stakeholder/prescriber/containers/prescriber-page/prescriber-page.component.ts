import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PushModule } from '@ngrx/component';
import { routes } from '@roc-web/callcenter/stakeholder/prescriber/containers';
import {
  SidenavComponent,
  createSidenavRoutes,
  slideInAnimation,
} from '@roc-web/core';

@Component({
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PushModule, SidenavComponent],
  selector: 'app-prescriber',
  standalone: true,
  styleUrls: ['./prescriber-page.component.scss'],
  templateUrl: './prescriber-page.component.html',
})
export default class PrescriberPageComponent {
  protected readonly routes = createSidenavRoutes(routes, ':id', 'assignment');
  protected readonly title$ = inject(ActivatedRoute).title;
}
