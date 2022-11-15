import { Routes } from '@angular/router';

import { authCanActivate } from '@roc-web/identity/auth';

export default [
  {
    path: '',
    canActivate: [authCanActivate],
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadComponent: () =>
          import('./prescriber-list').then(m => m.PrescriberListComponent),
      },
    ],
  },
] as Routes;
