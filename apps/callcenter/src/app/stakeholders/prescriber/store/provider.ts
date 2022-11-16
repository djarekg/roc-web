import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { PrescribersEffects, SearchEffects } from './effects';

import { prescribersFeature } from './prescribers.features';

export function providePrescriber(): EnvironmentProviders {
  const providers: Provider = [
    provideState(prescribersFeature),
    provideEffects(PrescribersEffects, SearchEffects),
  ];

  return makeEnvironmentProviders(providers);
}
