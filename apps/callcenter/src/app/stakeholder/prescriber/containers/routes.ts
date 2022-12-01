import { type Routes } from '@angular/router';
import { authGuards } from '@roc-web/identity/auth';

import { prescriberExitsGuards } from '../guards';
import { providePrescriber } from '../store';

export const routes = [
  {
    canActivate: [authGuards.canActivate],
    children: [
      {
        loadComponent: () =>
          import('./prescribers-page/prescribers-page.component'),
        path: '',
        title: 'Prescribers',
      },
      {
        canActivate: [prescriberExitsGuards.canActive],
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'summary',
          },
          {
            data: { animation: 'SummaryPage' },
            loadComponent: () =>
              import(
                './prescriber-summary-page/prescriber-summary-page.component'
              ),
            path: 'summary',
            title: 'Summary',
          },
          {
            data: { animation: 'AttestationsPage' },
            loadComponent: () =>
              import(
                './prescriber-attestations-page/prescriber-attestations-page.component'
              ),
            path: 'attestations',
            title: 'Attestations',
          },
        ],
        loadComponent: () =>
          import('./prescriber-page/prescriber-page.component'),
        path: ':id',
        title: 'Prescriber',
      },
    ],
    path: '',
    providers: [providePrescriber()],
  },
] as Routes;
