import {
  type EnvironmentProviders,
  type Provider,
  makeEnvironmentProviders,
} from '@angular/core';

import { LocalStorageService, SessionStorageService } from './services';
import { LOCAL_STORAGE, SESSION_STORAGE } from './tokens';

export function provideStorage(): EnvironmentProviders {
  const providers: Provider[] = [
    {
      deps: [LOCAL_STORAGE],
      provide: LocalStorageService,
      useClass: LocalStorageService,
    },
    {
      deps: [SESSION_STORAGE],
      provide: SessionStorageService,
      useClass: SessionStorageService,
    },
  ];

  return makeEnvironmentProviders(providers);
}
