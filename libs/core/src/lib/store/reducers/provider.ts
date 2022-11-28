import {
  type EnvironmentProviders,
  type Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import { META_REDUCERS } from '@ngrx/store';


import { LocalStorageService } from '../../storage/services';

import { metaReducerFactory } from './meta-reducer-factory';

import { type CoreState } from '.';

export function provideCoreStore(): EnvironmentProviders {
  const providers: Provider[] = [
    {
      provide: META_REDUCERS,
      deps: [LocalStorageService],
      useFactory: metaReducerFactory<CoreState>,
      multi: true,
    },
  ];

  return makeEnvironmentProviders(providers);
}
