import { Routes } from '@angular/router';

import { authCanActivate } from '@roc-web/identity/auth';

import { providePrescriber } from '../store/provider';
import { PrescriberComponent } from './prescriber';

export default [
  {
    path: '',
    component: PrescriberComponent,
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
        title: 'Prescriber List',
      },
    ],
    canActivate: [authCanActivate],
    providers: [providePrescriber()],
  },
] as Routes;
