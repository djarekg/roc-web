import { Sort } from '@angular/material/sort';

import { Pagination } from '@roc-web/web';

import { Prescriber } from '../../models';

export interface State {
  entities: ReadonlyArray<Prescriber>;
  error: string;
  filter: string;
  loaded: boolean;
  loading: boolean;
  pagination: Pagination;
  selectedPrescriberId: string | null;
  sort: Sort;
}

export const initialState: State = {
  entities: [],
  error: '',
  filter: '',
  loaded: false,
  loading: false,
  pagination: {
    pageIndex: 0,
    pageSize: 10,
    totalCount: 0,
  },
  selectedPrescriberId: null,
  sort: {
    active: 'name',
    direction: 'asc',
  },
};
