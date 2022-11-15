import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: 'signin',
    loadComponent: () =>
      import('./signin/signin.component').then(m => m.SigninComponent),
  },
];
