import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { CoreState } from '@roc-web/core';
import { parseClaimsPrincipal } from '../../utils';
import * as fromAuth from './auth.reducers';
import * as fromSigninPage from './signin-page.reducers';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
  [fromSigninPage.signinPageFeatureKey]: fromSigninPage.State;
}

export interface State extends CoreState {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromSigninPage.signinPageFeatureKey]: fromSigninPage.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  state => state.status
);

export const selectIsAuthenticated = createSelector(
  selectAuthStatusState,
  state => !!state.token
);

export const selectClaims = createSelector(selectAuthStatusState, state =>
  parseClaimsPrincipal(state.token)
);

export const selectAuthentication = createSelector(
  selectIsAuthenticated,
  selectClaims,
  (isAuthenticated, claims) => ({ isAuthenticated, claims })
);

export const selectUser = createSelector(
  selectAuthStatusState,
  state => state.user
);

export const selectRoles = createSelector(
  selectClaims,
  claims => claims?.roles ?? []
);

export const selectSigninPageState = createSelector(
  selectAuthState,
  state => state.signinPage
);

export const selectSigninPageError = createSelector(
  selectSigninPageState,
  fromSigninPage.getError
);

export const selectSigninPagePending = createSelector(
  selectSigninPageState,
  fromSigninPage.getPending
);
