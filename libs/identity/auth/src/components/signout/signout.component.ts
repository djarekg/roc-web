import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';

import { authActions } from '../../store/actions';
import * as fromAuth from '../../store/reducers';

@Component({
  selector: 'rw-signout',
  standalone: true,
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, LetModule],
})
export class SignoutComponent {
  readonly #store = inject(Store);

  protected readonly isAuthenticated$ = this.#store.select(
    fromAuth.selectIsAuthenticated
  );

  protected onSignout(): void {
    this.#store.dispatch(authActions.signout());
  }
}
