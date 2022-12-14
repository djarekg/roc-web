import { type Action, combineReducers } from '@ngrx/store';

import * as fromPrescribers from './prescribers.reducers';

export const featureKey = 'prescribers';

export interface PrescriberState {
  [fromPrescribers.prescribersKey]: fromPrescribers.State;
}

export interface FeatureState {
  [featureKey]: PrescriberState;
}

export function reducers(state: PrescriberState | undefined, action: Action) {
  return combineReducers({
    [fromPrescribers.prescribersKey]: fromPrescribers.reducer,
  })(state, action);
}
