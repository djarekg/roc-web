import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'prescribers', pathMatch: 'full' },
  {
    path: 'prescribers',
    loadChildren: () => import('./stakeholders/prescriber/containers/routes'),
  },
];
