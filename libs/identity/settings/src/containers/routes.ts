import { Routes } from '@angular/router';

import { authGuards, Roles } from '@roc-web/identity/auth';

import {
  AccountComponent,
  SecurityComponent,
  SettingsComponent,
} from './settings';

export default [
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
    canActivate: [authGuards.canActivate],
  },
] as Routes;
