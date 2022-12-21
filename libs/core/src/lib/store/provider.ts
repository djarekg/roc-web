import {
  type EnvironmentProviders,
  type Provider,
  isDevMode,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { META_REDUCERS, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { LocalStorageService } from '../storage/services';
import { TOAST_SERVICE } from '../toast';

import { coreEffects } from './effects';
import { type CoreState, ROOT_REDUCERS, metaReducers } from './reducers';
import { metaReducerFactory } from './reducers/meta-reducer-factory';

const metaReducersProvider: Provider = {
  provide: META_REDUCERS,
  useFactory: metaReducerFactory<CoreState>,
  deps: [LocalStorageService],
  multi: true,
};

const storeProviders: EnvironmentProviders[] = [
  provideStore(ROOT_REDUCERS, {
    metaReducers: metaReducers,
    runtimeChecks: {
      strictActionSerializability: true,
      strictActionTypeUniqueness: true,
      strictActionWithinNgZone: true,
      strictStateSerializability: true,
    },
  }),
  provideRouterStore(),
  provideEffects(coreEffects),
  provideStoreDevtools({
    logOnly: !isDevMode(),
    maxAge: 25,
    name: 'Call Center',
  }),
];

export function provideCoreState(): EnvironmentProviders[] {
  return [...storeProviders, makeEnvironmentProviders([metaReducersProvider, TOAST_SERVICE])];
}
