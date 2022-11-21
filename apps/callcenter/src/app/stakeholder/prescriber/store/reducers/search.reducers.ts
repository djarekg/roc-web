import { createReducer } from '@ngrx/store';

import * as fromState from '../state/prescriber.state';

export const searchFeatureKey = 'search';

export const reducer = createReducer(
  fromState.initialState
  // on(
  //   findPrescriberPageActions.searchPrescribers,
  //   (state, { filter }): fromState.State => {
  //     return filter === ''
  //       ? {
  //           ...fromState.initialState,
  //           filter,
  //         }
  //       : {
  //           ...state,
  //           loading: true,
  //           error: '',
  //           filter,
  //         };
  //   }
  // ),
  // on(
  //   prescribersApiActions.searchSuccess,
  //   (state, { response }): fromState.State => ({
  //     ...state,
  //     entities: response.entities,
  //     loaded: true,
  //     loading: false,
  //     pagination: response.pagination,
  //   })
  // ),
  // on(
  //   prescribersApiActions.searchFailure,
  //   (state, { error }): fromState.State => ({
  //     ...state,
  //     loading: false,
  //     error: error,
  //   })
  // )
);

export const getEntities = (state: fromState.State) => state.entities;
export const getError = (state: fromState.State) => state.error;
// export const getFilter = (state: fromState.State) => state.filter;
export const getLoading = (state: fromState.State) => state.loading;
