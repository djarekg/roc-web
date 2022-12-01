import { type Routes } from '@angular/router';
import { Roles, authGuards } from '@roc-web/identity/auth';

import {
  AccountComponent,
  SecurityComponent,
  SettingsComponent,
} from './settings';

export default [
  {
    canActivate: [authGuards.canActivate],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account',
      },
      {
        component: AccountComponent,
        data: { animation: 'AccountPage' },
        path: 'account',
        title: 'Account',
      },
      {
        component: SecurityComponent,
        data: { animation: 'SecurityPage' },
        path: 'security',
        title: 'Security',
      },
    ],
    component: SettingsComponent,
    data: { role: Roles.administrator },
    path: 'settings',
    title: 'Account Settings',
  },
] as Routes;
