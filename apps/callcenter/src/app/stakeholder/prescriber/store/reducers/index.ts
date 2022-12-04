import {
  type Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromPrescribers from './prescribers.reducers';

export const prescribersFeatureKey = 'prescribers';

export interface PrescriberState {
  [fromPrescribers.prescribersFeatureKey]: fromPrescribers.State;
}

export interface State {
  [prescribersFeatureKey]: PrescriberState;
}

export function reducers(state: PrescriberState | undefined, action: Action) {
  return combineReducers({
    [fromPrescribers.prescribersFeatureKey]: fromPrescribers.reducer,
  })(state, action);
}

export const selectPrescribersState = createFeatureSelector<PrescriberState>(
  prescribersFeatureKey
);

export const selectPrescriberEntitiesState = createSelector(
  selectPrescribersState,
  state => state.prescribers
);

export const selectPrescribers = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getEntities
);

export const selectFilter = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getFilter
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

export const selectSelected = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getSelected
);

export const selectSelectedLoaded = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getSelectedLoaded
);

export const selectSort = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.getSort
);

export const selectViewModel = createSelector(
  selectPrescriberEntitiesState,
  selectLoading,
  selectPrescribers,
  selectPagination,
  (state, loading, prescribers, pagination) => ({
    loading,
    prescribers,
    ...pagination,
  })
);
