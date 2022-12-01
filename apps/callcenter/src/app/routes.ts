import { type Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'prescriber' },
  {
    loadChildren: () =>
      import('./stakeholder/prescriber/containers/routes').then(m => m.routes),
    path: 'prescriber',
  },
];
