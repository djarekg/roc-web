import { Route } from '@angular/router';

import { SigninComponent } from './signin';

export const authRoutes: Route[] = [
  {
    path: 'signin',
    component: SigninComponent,
  },
];
