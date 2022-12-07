import { createReducer, on } from '@ngrx/store';

import { type TokenResponse } from '../../shared/models';
import { authActions, authApiActions } from '../actions';

export const statusFeatureKey = 'status';

export interface State extends TokenResponse {}

export const initialState: State = {
  token: null,
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(authActions.setUser, (state, { user }): State => ({ ...state, user })),
  on(
    authApiActions.signinSuccess,
    (state, { token, user }): State => ({
      ...state,
      token,
      user,
    }),
  ),
  on(authActions.signout, (): State => initialState),
);

export const getToken = (state: State) => state.token;
export const getUser = (state: State) => state.user;
