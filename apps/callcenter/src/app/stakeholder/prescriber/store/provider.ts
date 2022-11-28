import {
  type EnvironmentProviders,
  type Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { PrescriberService } from '../services';

import { PrescribersEffects } from './effects';
import { prescribersFeature } from './prescribers.features';

export function providePrescriber(): EnvironmentProviders {
  const providers: Provider = [
    provideState(prescribersFeature),
    provideEffects(PrescribersEffects),
    {
      provide: PrescriberService,
      useClass: PrescriberService,
    },
  ];

  return makeEnvironmentProviders(providers);
}
