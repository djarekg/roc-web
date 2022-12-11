import { withInterceptors } from '@angular/common/http';
import {
  type EnvironmentProviders,
  type Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import routes from './containers/routes';
import { HTTP_AUTH_INTERCEPTOR } from './shared/interceptors';
import { TokenService } from './shared/services';
import { AuthEffects, authFeature } from './store';

const providers: Provider[] = [
  {
    provide: TokenService,
    useClass: TokenService,
  },
];

export function provideIdentity(): EnvironmentProviders {
  return makeEnvironmentProviders([
    [
      withInterceptors([HTTP_AUTH_INTERCEPTOR]),
      provideState(authFeature),
      provideEffects(AuthEffects),
    ],
    providers,
  ]);
}

export { routes as IDENTITY_AUTH_ROUTES };
