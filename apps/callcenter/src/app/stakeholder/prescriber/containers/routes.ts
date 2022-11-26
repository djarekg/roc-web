import { Routes } from '@angular/router';

import {
  prescriberExitsGuards,
  providePrescriber,
} from '@roc-web/callcenter/stakeholder/prescriber/state';
import { authGuards } from '@roc-web/identity/auth';

export default [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./prescribers-page/prescribers-page.component'),
        title: 'Prescribers',
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./prescriber-page/prescriber-page.component'),
        title: 'Prescriber',
        canActivate: [prescriberExitsGuards.canActive],
      },
    ],
    canActivate: [authGuards.canActivate],
    providers: [providePrescriber()],
  },
] as Routes;
