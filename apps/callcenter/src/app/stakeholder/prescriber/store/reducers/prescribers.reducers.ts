import { type Sort } from '@angular/material/sort';
import { createReducer, on } from '@ngrx/store';
import { MAX_PAGE_SIZE, type Pagination } from '@roc-web/core';

import { type Prescriber } from '../../models';
import { prescribersApiActions, prescribersPageActions } from '../actions';

export const prescribersKey = 'prescribers';

export interface State {
  entities: Readonly<Prescriber>[];
  filter: string | null;
  loaded: boolean;
  loading: boolean;
  pagination: Pagination;
  selected: Prescriber | null;
  sort: Sort;
}

const initialState: State = {
  entities: [],
  filter: null,
  loaded: false,
  loading: false,
  pagination: {
    pageIndex: 0,
    pageSize: MAX_PAGE_SIZE,
    totalCount: 0,
  },
  selected: null,
  sort: {
    active: 'id',
    direction: 'asc',
  },
};

export const reducer = createReducer(
  initialState,
  on(prescribersPageActions.loadPrescribers, (state): State => ({ ...state, loading: true })),
  on(
    prescribersApiActions.loadPrescriberSuccess,
    (state, { prescriber }): State => ({
      ...state,
      selected: prescriber,
    }),
  ),
  on(
    prescribersApiActions.loadPrescribersSuccess,
    (state, { entities, pagination }): State => ({
      ...state,
      entities,
      loaded: true,
      loading: false,
      pagination,
      selected: null,
    }),
  ),
  on(prescribersPageActions.changePage, (state, { pageIndex }): State => {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        pageIndex,
      },
    };
  }),
  on(
    prescribersPageActions.filterChange,
    (state, { filter }): State => ({
      ...state,
      filter,
    }),
  ),
  on(prescribersPageActions.sortPage, (state, { active, direction }): State => {
    return {
      ...state,
      sort: {
        active,
        direction,
      },
    };
  }),
  on(
    prescribersPageActions.viewPrescriber,
    (state, { id }): State => ({
      ...state,
      selected: state.entities.find(p => p.id === id) ?? null,
    }),
  ),
  on(
    prescribersApiActions.addPrescriberFailure,
    prescribersApiActions.loadPrescriberFailure,
    prescribersApiActions.loadPrescribersFailure,
    prescribersApiActions.removePrescriberFailure,
    prescribersApiActions.updatePrescriberFailure,
    (state): State => ({
      ...state,
      loaded: true,
      loading: false,
    }),
  ),
);

export const getEntities = (state: State) => state.entities;
export const getFilter = (state: State) => state.filter;
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => true; //state.loading;
export const getPagination = (state: State) => state.pagination;
export const getSelected = (state: State) => state.selected;
export const getSelectedLoaded = (state: State) => !!state.selected;
export const getSort = (state: State) => state.sort;
