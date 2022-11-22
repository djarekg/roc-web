import { createReducer, on } from '@ngrx/store';

import {
  prescribersApiActions,
  prescribersPageActions,
  selectedPrescriberPageActions,
} from '../actions';
import * as fromState from '../state/prescriber.state';

export const prescribersFeatureKey = 'prescribers';

export const reducer = createReducer(
  fromState.initialState,
  on(
    prescribersPageActions.enter,
    (state): fromState.State => ({
      ...state,
      loading: true,
    })
  ),
  on(
    prescribersApiActions.loadPrescriberSuccess,
    prescribersApiActions.searchSuccess,
    (state, { response }): fromState.State => {
      const { entities, pagination } = response;

      return {
        ...state,
        entities,
        loaded: true,
        loading: false,
        pagination,
      };
    }
  ),
  on(
    prescribersPageActions.changePage,
    (state, { options }): fromState.State => {
      return {
        ...state,
        ...options,
      };
    }
  ),
  on(
    prescribersApiActions.removePrescriberFailure,
    (state, { prescriber }): fromState.State => {
      return {
        ...state,
        entities: [...state.entities, prescriber],
      };
    }
  ),
  on(
    prescribersApiActions.addPrescriberFailure,
    (state, { prescriber }): fromState.State => {
      return {
        ...state,
        entities: state.entities.filter(entity => entity.id !== prescriber.id),
      };
    }
  ),
  on(
    prescribersApiActions.updatePrescriberFailure,
    (state, { prescriber }): fromState.State => {
      return {
        ...state,
        entities: state.entities.map(entity =>
          entity.id === prescriber.id ? prescriber : entity
        ),
      };
    }
  ),
  on(
    selectedPrescriberPageActions.selectPrescriber,
    (state, { id }): fromState.State => ({
      ...state,
      selectedPrescriberId: id,
    })
  )
);

export const getEntities = (state: fromState.State) => state.entities;
export const getLoaded = (state: fromState.State) => state.loaded;
export const getLoading = (state: fromState.State) => state.loading;
export const getPagination = (state: fromState.State) => state.pagination;
export const getPaginationOptions = (state: fromState.State) =>
  state.paginationOptions;
export const selectId = (state: fromState.State) => state.selectedPrescriberId;
