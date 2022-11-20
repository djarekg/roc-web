import { Route } from '@angular/router';

import { authCanActivate, Roles } from '@roc-web/identity/auth';

import {
  AccountComponent,
  SecurityComponent,
  SettingsComponent,
} from './settings';

export const settingsRoutes: Route[] = [
  {
    path: 'settings',
    component: SettingsComponent,
    data: { role: Roles.administrator },
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
