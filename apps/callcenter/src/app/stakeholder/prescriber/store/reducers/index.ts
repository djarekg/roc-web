import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@roc-web/callcenter/store';
import * as fromState from '../state/prescriber.state';
import * as fromPrescribers from './prescribers.reducers';
import * as fromSearch from './search.reducers';

export const prescribersFeatureKey = 'prescribers';

export interface PrescriberState {
  [fromPrescribers.prescribersFeatureKey]: fromState.State;
  [fromSearch.searchFeatureKey]: fromState.State;
}

export interface State extends fromRoot.State {
  [prescribersFeatureKey]: PrescriberState;
}

export function reducers(state: PrescriberState | undefined, action: Action) {
  return combineReducers({
    [fromPrescribers.prescribersFeatureKey]: fromPrescribers.reducer,
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
  })(state, action);
}

export const selectFeatureState = createFeatureSelector<PrescriberState>(
  prescribersFeatureKey
);

export const selectState = createSelector(
  selectFeatureState,
  state => state.prescribers
);

export const selectEntities = createSelector(
  selectState,
  fromPrescribers.getEntities
);

export const selectLoaded = createSelector(
  selectState,
  fromPrescribers.getLoaded
);

export const selectLoading = createSelector(
  selectState,
  fromPrescribers.getLoading
);

export const selectPaginationOptions = createSelector(
  selectState,
  fromPrescribers.getPaginationOptions
);
