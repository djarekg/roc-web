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
        redirectTo: 'collection',
        pathMatch: 'full',
      },
      {
        path: 'collection',
        loadComponent: () => import('./prescriber-collection'),
        title: 'Prescribers',
      },
    ],
    canActivate: [authCanActivate],
    providers: [providePrescriber()],
  },
] as Routes;
