import { type ActionReducer } from '@ngrx/store';

import { type CoreState } from '.';

// console.log all actions
export function debug(
  reducer: ActionReducer<CoreState>,
): ActionReducer<CoreState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}
