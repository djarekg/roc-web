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
  selector: 'app-prescriber',
  standalone: true,
  templateUrl: './prescriber-page.component.html',
  styleUrls: ['./prescriber-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
  imports: [PushModule, SidenavComponent],
})
export default class PrescriberPageComponent {
  protected readonly routes = createSidenavRoutes(routes, ':id', 'assignment');
  protected readonly title$ = inject(ActivatedRoute).title;
}
