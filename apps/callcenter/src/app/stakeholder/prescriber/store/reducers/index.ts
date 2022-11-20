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

export const selectPrescriberState = createFeatureSelector<PrescriberState>(
  prescribersFeatureKey
);

export const selectPrescriberEntitiesState = createSelector(
  selectPrescriberState,
  state => state.prescribers
);

export const selectEntities = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getEntities
);

export const selectLoaded = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getLoaded
);

export const selectLoading = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getLoading
);

export const selectPagination = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getPagination
);

export const selectSort = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getSort
);
