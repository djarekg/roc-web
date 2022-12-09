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
import { LocalStorageService } from '@roc-web/core/storage';

import { coreEffects } from './effects';
import { type CoreState, ROOT_REDUCERS, debugMetaReducers } from './reducers';
import { metaReducerFactory } from './reducers/meta-reducer-factory';
import { ToastService } from './services';

export function provideCoreState(): EnvironmentProviders[] {
  const providers: Provider[] = [
    {
      provide: META_REDUCERS,
      multi: true,
      useFactory: metaReducerFactory<CoreState>,
      deps: [LocalStorageService],
    },
    {
      provide: ToastService,
      useClass: ToastService,
    },
  ];

  return [
    provideStore(ROOT_REDUCERS, {
      metaReducers: debugMetaReducers,
      runtimeChecks: {
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true,
        // strictStateImmutability and strictActionImmutability are enabled by default
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
    makeEnvironmentProviders(providers),
  ];
}
