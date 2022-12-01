import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { type TokenUser, authActions, fromAuth } from '@roc-web/identity/auth';

import { UserDetailsFormComponent } from '../user-details-form';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, UserDetailsFormComponent, PushModule],
  selector: 'rw-settings-user-details',
  standalone: true,
  styleUrls: ['./user-details.component.scss'],
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
  readonly #store = inject(Store);

  protected user$ = this.#store.select(fromAuth.selectUser);

  protected onSubmit(user: TokenUser): void {
    this.#store.dispatch(authActions.setUser({ user }));
  }
}
