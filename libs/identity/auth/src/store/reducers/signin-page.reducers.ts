import { createReducer, on } from '@ngrx/store';
import { signinPageActions, authApiActions } from '../actions';

export const signinPageFeatureKey = 'signinPage';

export interface State {
  errors: string[];
  pending: boolean;
}

export const initialState: State = {
  errors: [],
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(
    signinPageActions.signin,
    (state): State => ({
      ...state,
      errors: [],
      pending: true,
    })
  ),
  on(
    authApiActions.signinSuccess,
    (state): State => ({
      ...state,
      errors: [],
      pending: false,
    })
  ),
  on(
    authApiActions.signinFailure,
    (state, { error }): State => ({
      ...state,
      errors: error,
      pending: false,
    })
  )
);

export const getError = (state: State) => state.errors;
export const getPending = (state: State) => state.pending;
