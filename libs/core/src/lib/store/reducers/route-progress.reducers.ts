import { createReducer, on } from '@ngrx/store';

import { routeProgressActions } from '../actions';

export const routeProgressFeatureKey = 'routeProgress';

export interface State {
  inProgress: boolean;
}

const initialState: State = {
  inProgress: false,
};

export const reducer = createReducer(
  initialState,
  on(
    routeProgressActions.navigationStarted,
    (): State => ({ inProgress: true }),
  ),
  on(
    routeProgressActions.navigationCompleted,
    (): State => ({ inProgress: false }),
  ),
);

export const selectInProgress = (state: State) => state.inProgress;
