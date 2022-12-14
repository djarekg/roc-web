import { type Data } from '@angular/router';
import * as fromRouterStore from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { stringify } from '@roc-web/core';

export const { selectRouteData, selectRouteParam, selectTitle } =
  fromRouterStore.getSelectors();

export const selectRouteRole = createSelector(selectRouteData, (data: Data) =>
  stringify(data?.['role'] ?? ''),
);
