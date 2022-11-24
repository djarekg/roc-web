import { createReducer, on } from '@ngrx/store';
import {
  collectionApiActions,
  collectionPageActions,
  selectedPrescriberPageActions,
} from '../actions';

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

export const reducer = createReducer(
  initialState,
  on(
    collectionPageActions.enter,
    (state): State => ({ ...state, loading: true })
  ),
  on(collectionApiActions.loadPrescriberSuccess, (_state, { entities }) => ({
    loaded: true,
    loading: false,
    ids: entities.map(entity => entity.id),
  })),
  on(
    selectedPrescriberPageActions.addPrescriber,
    collectionApiActions.updatePrescriberFailure,
    collectionApiActions.removePrescriberFailure,
    (state, { prescriber }) => {
      if (state.ids.includes(prescriber.id)) {
        return state;
      }

      return {
        ...state,
        ids: [...state.ids, prescriber.id],
      };
    }
  ),
  on(
    selectedPrescriberPageActions.removePrescriber,
    collectionApiActions.addPrescriberFailure,
    (state, { prescriber }) => ({
      ...state,
      ids: state.ids.filter(id => id !== prescriber.id),
    })
  )
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;
