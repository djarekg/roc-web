import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'prescriber', pathMatch: 'full' },
  {
    path: 'prescriber',
    loadChildren: () => import('./stakeholder/prescriber/containers/routes'),
  },
];
