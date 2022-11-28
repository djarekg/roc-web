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
      provide: LocalStorageService,
      useClass: LocalStorageService,
      deps: [LOCAL_STORAGE],
    },
    {
      provide: SessionStorageService,
      useClass: SessionStorageService,
      deps: [SESSION_STORAGE],
    },
  ];

  return makeEnvironmentProviders(providers);
}
