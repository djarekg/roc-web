import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { authActions, fromAuth, type TokenUser } from '@roc-web/identity/auth';
import { UserDetailsFormComponent } from '../user-details-form';

@Component({
  selector: 'rw-settings-user-details',
  standalone: true,
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, UserDetailsFormComponent, PushModule],
})
export class UserDetailsComponent {
  readonly #store = inject(Store);

  protected user$ = this.#store.select(fromAuth.selectUser);

  protected onSubmit(user: TokenUser): void {
    this.#store.dispatch(authActions.setUser({ user }));
  }
}
