import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@roc-web/callcenter/store';
import { EntityList } from '@roc-web/web';

import { Prescriber } from '../../models';
import * as fromCollection from './collection.reducers';
import * as fromPrescribers from './prescribers.reducers';

export const prescribersFeatureKey = 'prescribers';

export interface PrescriberState {
  [fromPrescribers.prescribersFeatureKey]: fromPrescribers.State;
  [fromCollection.collectionFeatureKey]: fromCollection.State;
}

export interface State extends fromRoot.State {
  [prescribersFeatureKey]: PrescriberState;
}

export function reducers(state: PrescriberState | undefined, action: Action) {
  return combineReducers({
    [fromPrescribers.prescribersFeatureKey]: fromPrescribers.reducer,
    [fromCollection.collectionFeatureKey]: fromCollection.reducer,
  })(state, action);
}

export const selectPrescribersState = createFeatureSelector<PrescriberState>(
  prescribersFeatureKey
);

export const selectPrescriberEntitiesState = createSelector(
  selectPrescribersState,
  state => state.prescribers
);

export const selectSelectedPrescriberId = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.selectId
);

export const selectPagination = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.selectPagination
);

export const selectSort = createSelector(
  selectPrescriberEntitiesState,
  fromPrescribers.selectSort
);

export const selectPaginationAndSort = createSelector(
  selectPagination,
  selectSort,
  (pagination, sort) => {
    return {
      pagination,
      sort,
    };
  }
);

export const {
  selectIds: selectPrescriberIds,
  selectEntities: selectPrescriberEntities,
  selectAll: selectAllPrescribers,
  selectTotal: selectTotalPrescribers,
} = fromPrescribers.adapter.getSelectors(selectPrescriberEntitiesState);

export const selectSelectedPrescriber = createSelector(
  selectPrescriberEntities,
  selectSelectedPrescriberId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const selectAllPrescribersWithPaginationSort = createSelector(
  selectAllPrescribers,
  selectPagination,
  selectSort,
  (prescribers, pagination, sort): EntityList<Prescriber> => {
    return {
      entities: prescribers,
      pagination,
      sort,
    };
  }
);

export const selectCollectionState = createSelector(
  selectPrescribersState,
  state => state.collection
);

export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  fromCollection.getLoaded
);
export const selectCollectionLoading = createSelector(
  selectCollectionState,
  fromCollection.getLoading
);
export const selectCollectionPrescriberIds = createSelector(
  selectCollectionState,
  fromCollection.getIds
);

export const selectPrescriberCollection = createSelector(
  selectPrescriberEntities,
  selectCollectionPrescriberIds,
  (entities, ids) => {
    return ids
      .map(id => entities[id])
      .filter((book): book is Prescriber => book != null);
  }
);

// eslint-disable-next-line @ngrx/prefix-selectors-with-select
export const isSelectedPrescriberInCollection = createSelector(
  selectCollectionPrescriberIds,
  selectSelectedPrescriberId,
  (ids, selected) => {
    return !!selected && ids.indexOf(selected) > -1;
  }
);
