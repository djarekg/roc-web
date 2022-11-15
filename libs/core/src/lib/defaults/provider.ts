import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CORE_OPTIONS, Environment } from '../options';
import { MAT_FORM_FIELDS } from './mat-form-fields';
import { MAT_ICON } from './mat-icon';
import { META_TAGS } from './meta-tags';

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

export function provideSharedImports(): unknown[] {
  const imports: unknown[] = [MatSnackBarModule];

  return imports;
}
