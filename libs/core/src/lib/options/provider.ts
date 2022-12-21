import { type EnvironmentProviders, type Provider, makeEnvironmentProviders } from '@angular/core';

import { type Environment } from '../shared/models';

import { MAT_FORM_FIELDS, MAT_ICON, META_TAGS } from './defaults';
import { CORE_OPTIONS } from './tokens';

export function provideCoreDefaults(environment: Partial<Environment>): EnvironmentProviders {
  const providers: Provider[] = [
    MAT_FORM_FIELDS,
    MAT_ICON,
    META_TAGS,
    {
      provide: CORE_OPTIONS,
      useValue: { ...environment },
    },
  ];

  return makeEnvironmentProviders(providers);
}
