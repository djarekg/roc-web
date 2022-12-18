import { type Routes } from '@angular/router';
import { RouteAction } from '@roc-web/core';
import { authGuards } from '@roc-web/identity/auth';
import { PRESCRIBER_ROUTE_DEFAULT } from '../constants';

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
        path: ':id',
        loadComponent: () =>
          import('./prescriber-page/prescriber-page.component'),
        title: 'Prescriber',
        canActivate: [prescriberExitsGuards.canActive],
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: `${PRESCRIBER_ROUTE_DEFAULT}/${RouteAction.view}`,
          },
          {
            data: { animation: 'SummaryPage' },
            loadComponent: () =>
              import(
                './prescriber-summary-page/prescriber-summary-page.component'
              ),
            path: 'summary/:action',
            title: 'Summary',
          },
          {
            data: { animation: 'AttestationsPage' },
            loadComponent: () =>
              import(
                './prescriber-attestations-page/prescriber-attestations-page.component'
              ),
            path: 'attestations/:action',
            title: 'Attestations',
          },
        ],
      },
    ],
    path: '',
    providers: [providePrescriber()],
  },
] satisfies Routes;
