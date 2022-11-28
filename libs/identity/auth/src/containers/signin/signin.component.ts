import { KeyValuePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { AlertComponent } from '@roc-web/core';

import { SigninFormComponent } from '../../components';
import { type Credentials } from '../../models';
import { signinPageActions } from '../../store/actions';
import {
  selectSigninPageError,
  selectSigninPagePending,
} from '../../store/reducers';

@Component({
  selector: 'rw-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AlertComponent,
    KeyValuePipe,
    NgFor,
    LetModule,
    PushModule,
    SigninFormComponent,
  ],
})
export class SigninComponent {
  readonly #store = inject(Store);

  protected errors$ = this.#store.select(selectSigninPageError);
  protected pending$ = this.#store.select(selectSigninPagePending);

  protected onSigninSubmit(credentials: Credentials): void {
    this.#store.dispatch(signinPageActions.signin({ ...credentials }));
  }
}
