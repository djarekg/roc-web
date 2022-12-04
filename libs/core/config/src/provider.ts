import {
  type EnvironmentProviders,
  type Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import { type Environment } from '@roc-web/core/shared';

import { MAT_FORM_FIELDS, MAT_ICON, META_TAGS } from './defaults';
import { CORE_OPTIONS } from './tokens';

export function provideCoreConfig(
  environment: Partial<Environment>
): EnvironmentProviders {
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
