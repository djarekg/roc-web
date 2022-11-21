import { Routes } from '@angular/router';

import { providePrescriber } from '@roc-web/callcenter/stakeholder/prescriber/store';
import { authCanActivate } from '@roc-web/identity/auth';

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
        loadComponent: () => import('./prescriber-list'),
        title: 'Prescriber List',
      },
    ],
    canActivate: [authCanActivate],
    providers: [providePrescriber()],
  },
] as Routes;
