import {
  type EnvironmentProviders,
  type Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import { META_REDUCERS } from '@ngrx/store';
import { LocalStorageService } from '@roc-web/core/storage';

import { metaReducerFactory } from './meta-reducer-factory';

import { type CoreState } from '.';

export function provideCoreStore(): EnvironmentProviders {
  const providers: Provider[] = [
    {
      deps: [LocalStorageService],
      multi: true,
      provide: META_REDUCERS,
      useFactory: metaReducerFactory<CoreState>,
    },
  ];

  return makeEnvironmentProviders(providers);
}
