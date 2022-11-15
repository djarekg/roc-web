import { Routes } from '@angular/router';

import { authCanActivate } from '@roc-web/identity/auth';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/routes'),
    canActivate: [authCanActivate],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
