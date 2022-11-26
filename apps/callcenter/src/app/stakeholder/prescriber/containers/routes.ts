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
        children: [
          {
            path: '',
            redirectTo: 'summary',
            pathMatch: 'full',
          },
          {
            path: 'summary',
            loadComponent: () =>
              import('./prescriber-summary/prescriber-summary.component'),
            title: 'Summary',
            data: { animation: 'SummaryPage' },
          },
        ],
      },
    ],
    canActivate: [authGuards.canActivate],
    providers: [providePrescriber()],
  },
] as Routes;
