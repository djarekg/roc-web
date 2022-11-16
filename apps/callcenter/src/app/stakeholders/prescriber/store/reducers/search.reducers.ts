import { createReducer, on } from '@ngrx/store';
import { findPrescriberPageActions, prescribersApiActions } from '../actions';

import * as fromState from '../state/prescribers.state';

export const searchFeatureKey = 'search';

export const reducer = createReducer(
  fromState.initialState,
  on(
    findPrescriberPageActions.searchPrescribers,
    (state, { query }): fromState.State => {
      return query === ''
        ? {
            ...fromState.initialState,
            query,
          }
        : {
            ...state,
            loading: true,
            error: '',
            query,
          };
    }
  ),
  on(
    prescribersApiActions.searchSuccess,
    (state, { response }): fromState.State => ({
      ...state,
      entities: response.entities,
      loaded: true,
      loading: false,
      pagination: response.pagination,
    })
  ),
  on(
    prescribersApiActions.searchFailure,
    (state, { error }): fromState.State => ({
      ...state,
      loading: false,
      error: error,
    })
  )
);

export const getEntities = (state: fromState.State) => state.entities;
export const getError = (state: fromState.State) => state.error;
export const getLoading = (state: fromState.State) => state.loading;
export const getQuery = (state: fromState.State) => state.query;
