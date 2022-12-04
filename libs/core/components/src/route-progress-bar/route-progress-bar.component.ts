import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { selectRouteInProgress } from '@roc-web/core/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressBarModule, LetModule],
  selector: 'rw-route-progress-bar',
  standalone: true,
  styleUrls: ['./route-progress-bar.component.scss'],
  templateUrl: './route-progress-bar.component.html',
})
export class RouteProgressBarComponent {
  readonly #store = inject(Store);

  protected inProgress$ = this.#store.select(selectRouteInProgress);
}
