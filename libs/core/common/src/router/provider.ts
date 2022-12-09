import { type Route, type Routes } from '@angular/router';

export function providerRoutes(...routes: Array<Route | Routes>): Route[] {
  return routes.flat();
}
