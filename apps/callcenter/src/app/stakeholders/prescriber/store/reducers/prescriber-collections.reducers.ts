import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';

import { Pagination } from '@roc-web/web/lib/shared/models';

import {
  prescriberCollectionApiActions,
  prescriberCollectionPageActions,
  selectedPrescriberPageActions,
} from '../actions';

export const prescriberCollectionFeatureKey = 'prescriberCollection';

export interface State {
  error: HttpErrorResponse | null;
  pagination: Pagination;
  loaded: boolean;
  loading: boolean;
  ids: ReadonlyArray<string>;
}

export const initialState: State = {
  error: null,
  loaded: false,
  loading: false,
  ids: [],
};

export const reducers = createReducer(
  initialState,
  on(
    prescriberCollectionPageActions.enter,
    (state): State => ({
      ...state,
      loading: true,
    })
  ),
  on(
    prescriberCollectionApiActions.loadPrescriberSuccess,
    (state, { prescribers }): State => ({
      ...state,
      loaded: true,
      loading: false,
      ids: prescribers.items.map(prescriber => prescriber.id),
    })
  ),
  on(
    selectedPrescriberPageActions.addPrescriber,
    prescriberCollectionApiActions.removePrescriberFailure,
    (state, { prescriber }): State => {
      if (state.ids.indexOf(prescriber.id) > -1) {
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
    prescriberCollectionApiActions.addPrescriberFailure,
    (state, { prescriber }): State => {
      return { ...state, ids: state.ids.filter(id => id !== prescriber.id) };
    }
  )
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;
