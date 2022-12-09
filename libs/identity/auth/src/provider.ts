import {
  type EnvironmentProviders,
  type Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import routes from './containers/routes';
import { TokenService } from './shared/services';
import { AuthEffects, authFeature } from './store';

const authState = [provideState(authFeature), provideEffects(AuthEffects)];

const providers: Provider[] = [
  {
    provide: TokenService,
    useClass: TokenService,
  },
];

export function provideIdentity(): EnvironmentProviders {
  return makeEnvironmentProviders([authState, providers]);
}

export { routes as IDENTITY_AUTH_ROUTES };
