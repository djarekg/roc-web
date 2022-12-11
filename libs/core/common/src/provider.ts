import {
  type EnvironmentProviders,
  type Provider,
  makeEnvironmentProviders,
} from '@angular/core';

import { ToastService } from './services';

export function provideCoreCommon(): EnvironmentProviders {
  const providers: Provider[] = [
    {
      provide: ToastService,
      useClass: ToastService,
    },
  ];

  return makeEnvironmentProviders(providers);
}
