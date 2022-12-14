import { InjectionToken, isDevMode } from '@angular/core';
import { type Data } from '@angular/router';
import * as fromRouterStore from '@ngrx/router-store';
import { type BaseRouterStoreState } from '@ngrx/router-store';
import {
  type Action,
  type ActionReducer,
  type ActionReducerMap,
  type MetaReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { stringify } from '@roc-web/core';

import * as fromRouteProgress from './route-progress.reducers';

interface RouterProgressState extends BaseRouterStoreState {
  inProgress: boolean;
}

export interface CoreState {
  [fromRouteProgress.routeProgressFeatureKey]: fromRouteProgress.State;
  router: fromRouterStore.RouterReducerState<RouterProgressState>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<CoreState, Action>
>('Root reducers token', {
  factory: () => ({
    [fromRouteProgress.routeProgressFeatureKey]: fromRouteProgress.reducer,
    router: fromRouterStore.routerReducer,
  }),
});

// console.log all actions
export function logger(
  reducer: ActionReducer<CoreState>,
): ActionReducer<CoreState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const debugMetaReducers: MetaReducer[] = isDevMode() ? [logger] : [];

export const selectRouteProgressState =
  createFeatureSelector<fromRouteProgress.State>(
    fromRouteProgress.routeProgressFeatureKey,
  );

export const selectRouteInProgress = createSelector(
  selectRouteProgressState,
  fromRouteProgress.selectRouteInProgress,
);

export const { selectRouteData, selectRouteParam, selectTitle } =
  fromRouterStore.getSelectors();

export const selectRouteRole = createSelector(selectRouteData, (data: Data) =>
  stringify(data?.['role'] ?? ''),
);
