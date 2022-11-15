import { Route } from '@angular/router';

import { authCanActivate } from '@roc-web/identity/auth';

import {
  AccountComponent,
  SecurityComponent,
  SettingsComponent,
} from './settings';

export const settingsRoutes: Route[] = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
        title: 'Account',
        data: { animation: 'AccountPage' },
      },
      {
        path: 'security',
        component: SecurityComponent,
        title: 'Security',
        data: { animation: 'SecurityPage' },
      },
    ],
    canActivate: [authCanActivate],
  },
];
