import { createReducer, on } from '@ngrx/store';

import { TokenResponse } from '../../models';
import { authActions, authApiActions } from '../actions';

export const statusFeatureKey = 'status';

export interface State extends TokenResponse {}

export const initialState: State = {
  claims: null,
  token: null,
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(
    authActions.setClaims,
    (state, { claims }): State => ({ ...state, claims })
  ),
  on(authActions.setToken, (state, { token }): State => ({ ...state, token })),
  on(authActions.removeToken, (state): State => ({ ...state, token: null })),
  on(authActions.setUser, (state, { user }): State => ({ ...state, user })),
  on(
    authApiActions.signinSuccess,
    (state, { token, user }): State => ({
      ...state,
      token,
      user,
    })
  ),
  on(authActions.signout, (): State => initialState)
);

export const getClaims = (state: State) => state.claims;
export const getToken = (state: State) => state.token;
export const getUser = (state: State) => state.user;
