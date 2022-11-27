import { Sort } from '@angular/material/sort';
import { createReducer, on } from '@ngrx/store';
import { Pagination } from '@roc-web/web';
import { Prescriber } from '../../models';

import { prescribersApiActions, prescribersPageActions } from '../actions';

export const prescribersFeatureKey = 'prescribers';

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
    pageIndex: 1,
    pageSize: 10,
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
  on(
    prescribersPageActions.loadPrescribers,
    (state): State => ({ ...state, loading: true })
  ),
  on(
    prescribersApiActions.loadPrescriberSuccess,
    (state, { prescriber }): State => ({
      ...state,
      selected: prescriber,
    })
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
    })
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
    })
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
    })
  )
);

export const getEntities = (state: State) => state.entities;
export const getFilter = (state: State) => state.filter;
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getPagination = (state: State) => state.pagination;
export const getSelected = (state: State) => state.selected;
export const getSelectedLoaded = (state: State) => !!state.selected;
export const getSort = (state: State) => state.sort;
