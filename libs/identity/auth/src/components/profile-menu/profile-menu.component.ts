import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';

import { authActions } from '../../store/actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, RouterLink],
  selector: 'rw-profile-menu',
  standalone: true,
  styleUrls: ['./profile-menu.component.scss'],
  templateUrl: './profile-menu.component.html',
})
export class ProfileMenuComponent {
  readonly #store = inject(Store);

  protected onSignout(): void {
    this.#store.dispatch(authActions.signout());
  }
}
