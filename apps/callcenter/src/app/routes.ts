import { Routes } from '@angular/router';

import { authCanActivate } from '@roc-web/identity/auth';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/routes'),
    canActivate: [authCanActivate],
  },
  {
    path: 'prescriber',
    loadChildren: () => import('./stakeholders/containers/routes'),
  },
];
