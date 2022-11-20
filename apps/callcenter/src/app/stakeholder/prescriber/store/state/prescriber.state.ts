import { Sort } from '@angular/material/sort';

import { Prescriber } from '@roc-web/callcenter/stakeholder/prescriber/models';
import { ImmutableArray } from '@roc-web/core';
import { Pagination } from '@roc-web/web';

export interface State {
  entities: ImmutableArray<Prescriber>;
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
