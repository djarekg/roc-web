import { MatSnackBarModule } from '@angular/material/snack-bar';

export function provideSharedImports(): unknown[] {
  const imports: unknown[] = [MatSnackBarModule];

  return imports;
}
