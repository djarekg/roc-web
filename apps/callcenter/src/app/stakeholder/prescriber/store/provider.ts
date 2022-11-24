import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { PrescriberService } from '@roc-web/callcenter/stakeholder/prescriber/services';

import { CollectionEffects } from './effects';
import { prescribersFeature } from './prescribers.features';

export function providePrescriber(): EnvironmentProviders {
  const providers: Provider = [
    provideState(prescribersFeature),
    provideEffects(CollectionEffects),
    {
      provide: PrescriberService,
      useClass: PrescriberService,
    },
  ];

  return makeEnvironmentProviders(providers);
}
