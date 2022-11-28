import {
  type EnvironmentProviders,
  makeEnvironmentProviders,
  type Provider,
} from '@angular/core';
import { type Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import routes from './containers/routes';
import { TokenService } from './services';
import { AuthEffects, authFeature } from './store';

// export const authMetaReducerProvider = {
//   provide: META_REDUCERS,
//   deps: [LocalStorageService],
//   useFactory: metaReducerFactory<AuthState>,
//   multi: true,
// };

export function provideAuth(): EnvironmentProviders {
  const providers: Provider = [
    provideState(authFeature),
    provideEffects(AuthEffects),
  ];

  return makeEnvironmentProviders(providers);
}

export function provideAuthRoutes(): Routes {
  return routes;
}

export function provideToken(): EnvironmentProviders {
  const providers: Provider[] = [
    {
      provide: TokenService,
      useClass: TokenService,
    },
  ];

  return makeEnvironmentProviders(providers);
}
