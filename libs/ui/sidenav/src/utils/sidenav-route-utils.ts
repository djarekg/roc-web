import { type Route, type Routes } from '@angular/router';

import { type SidenavRoute } from '../models';

function getRouteWithChildrenByPath(
  routes: Routes | undefined,
  path: string,
): Route | null {
  while (routes?.length) {
    const route = routes.find(route => route.path === path);

    if (route?.children?.length) {
      return route;
    }

    routes = routes.find(route => route.children?.length)?.children;
  }

  return null;
}

export function createSidenavRoutes(
  routes: Routes,
  parentPath: string,
  icon?: string,
): SidenavRoute[] | null {
  const route = getRouteWithChildrenByPath(routes, parentPath);

  if (route?.children?.length) {
    return route.children
      ?.filter(route => route.path !== '')
      ?.map<SidenavRoute>(({ title, path }) => ({
        icon: icon ?? null,
        label: String(title),
        path: String(path),
      }));
  }

  return null;
}
