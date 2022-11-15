import { InjectionToken, isDevMode } from '@angular/core';
import * as fromRouterStore from '@ngrx/router-store';
import { BaseRouterStoreState } from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

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
  reducer: ActionReducer<CoreState>
): ActionReducer<CoreState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.debug('prev state', state);
    console.debug('action', action);
    console.debug('next state', result);
    console.groupEnd();

    return result;
  };
}

export const debugMetaReducers: MetaReducer[] = isDevMode() ? [logger] : [];

export const selectRouteProgressState =
  createFeatureSelector<fromRouteProgress.State>(
    fromRouteProgress.routeProgressFeatureKey
  );

export const selectRouteInProgress = createSelector(
  selectRouteProgressState,
  fromRouteProgress.selectRouteInProgress
);

export const { selectTitle } = fromRouterStore.getSelectors();
