import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { selectRouteInProgress } from '@roc-web/core/state';

@Component({
  selector: 'rw-ui-route-progress-bar',
  standalone: true,
  templateUrl: './route-progress-bar.component.html',
  styleUrls: ['./route-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressBarModule, LetModule],
})
export class RouteProgressBarComponent {
  readonly #store = inject(Store);

  protected inProgress$ = this.#store.select(selectRouteInProgress);
}
