import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';

import { authActions } from '../../store/actions';

@Component({
  selector: 'rw-signout',
  standalone: true,
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule],
})
export class SignoutComponent {
  readonly #store = inject(Store);

  protected onSignout(): void {
    this.#store.dispatch(authActions.signout());
  }
}
