import { InjectionToken, isDevMode } from '@angular/core';
import * as fromRouterStore from '@ngrx/router-store';
import { type BaseRouterStoreState } from '@ngrx/router-store';
import {
  type Action,
  type ActionReducerMap,
  type MetaReducer,
} from '@ngrx/store';

import { debug } from './debug.reducers';
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

export const metaReducers: MetaReducer[] = isDevMode() ? [debug] : [];
