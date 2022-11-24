import { Sort } from '@angular/material/sort';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Pagination } from '@roc-web/web';

import { Prescriber } from '../../models';

import {
  collectionApiActions,
  collectionPageActions,
  selectedPrescriberPageActions,
} from '../actions';

export const prescribersFeatureKey = 'prescribers';

export interface State extends EntityState<Prescriber> {
  pagination: Pagination;
  selectedPrescriberId: string | null;
  sort: Sort;
}

export const adapter: EntityAdapter<Prescriber> =
  createEntityAdapter<Prescriber>({
    selectId: (prescriber: Prescriber) => prescriber.id,
    sortComparer: false,
  });

export const initialState: State = adapter.getInitialState({
  pagination: {
    pageIndex: 1,
    pageSize: 10,
    totalCount: 0,
  },
  selectedPrescriberId: null,
  sort: {
    active: 'id',
    direction: 'asc',
  },
});

export const reducer = createReducer(
  initialState,
  on(
    collectionApiActions.loadPrescriberSuccess,
    (state, { entities, pagination }) =>
      adapter.addMany(entities, {
        ...state,
        pagination,
        selectedPrescriberId: null,
      })
  ),
  on(collectionPageActions.changePage, (state, { pageIndex }): State => {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        pageIndex,
      },
    };
  }),
  on(collectionPageActions.sortPage, (state, { active, direction }): State => {
    return {
      ...state,
      sort: {
        active,
        direction,
      },
    };
  }),
  on(
    selectedPrescriberPageActions.selectPrescriber,
    (state, { id }): State => ({
      ...state,
      selectedPrescriberId: id,
    })
  )
);

export const selectId = (state: State) => state.selectedPrescriberId;
export const selectPagination = (state: State) => state.pagination;
export const selectSort = (state: State) => state.sort;
