import {
  Prescriber,
  PrescriberPaginationOptions,
} from '@roc-web/callcenter/stakeholder/prescriber/models';
import { PaginationEntity } from '@roc-web/web';

export interface State extends PaginationEntity<Prescriber> {
  selectedPrescriberId: string | null;
  paginationOptions: PrescriberPaginationOptions;
}

export const initialState: State = {
  entities: [],
  error: null,
  loaded: false,
  loading: false,
  paginationOptions: {
    filter: null,
    lastName: null,
    pageIndex: 1,
    pageSize: 10,
    nationalId: null,
    sort: {
      active: 'id',
      direction: 'asc',
    },
    stakeholderId: null,
  },
  pagination: {
    pageIndex: 1,
    pageSize: 10,
    totalCount: 0,
  },
  selectedPrescriberId: null,
};
