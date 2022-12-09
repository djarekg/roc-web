import { type ImportProvidersSource } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export function provideSharedImports(): ImportProvidersSource[] {
  const imports: ImportProvidersSource[] = [MatSnackBarModule];

  return imports;
}
