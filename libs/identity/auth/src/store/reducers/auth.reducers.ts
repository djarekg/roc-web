import { createReducer, on } from '@ngrx/store';

import { TokenUser } from '../../models';
import { authActions, authApiActions } from '../actions';

export const statusFeatureKey = 'status';

export interface State {
  token: string | null;
  user: TokenUser | null;
}

export const initialState: State = {
  token: null,
  user: null,
};

export const reducer = createReducer(
  initialState,
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

export const getToken = (state: State) => state.token;
export const getUser = (state: State) => state.user;
