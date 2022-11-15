import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { META_REDUCERS } from '@ngrx/store';
import { CoreState } from '.';

import { LocalStorageService } from '../../storage/services';
import { metaReducerFactory } from './meta-reducer-factory';

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
