import { type ActionReducer, INIT, type MetaReducer, UPDATE } from '@ngrx/store';

import { type StorageBase } from '../../storage/storage-base';

export function metaReducerFactory<T = Record<string, unknown>>(
  storage: StorageBase
): MetaReducer<T> {
  return (reducer: ActionReducer<T>): ActionReducer<T> => {
    return (state, action) => {
      if (action.type === INIT || action.type === UPDATE) {
        const storageValue = storage.get<ActionReducer<T>>('state');

        if (storageValue) {
          return storageValue;
        }

        storage.remove('state');
      }
      const nextState = reducer(state, action);
      storage.set('state', nextState);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return nextState as any;
    };
  };
}
