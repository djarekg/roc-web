import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRouteProgress from '../reducers/route-progress.reducers';

export const selectRouteProgressState =
  createFeatureSelector<fromRouteProgress.State>(
    fromRouteProgress.routeProgressFeatureKey,
  );

export const selectRouteInProgress = createSelector(
  selectRouteProgressState,
  fromRouteProgress.selectInProgress,
);
