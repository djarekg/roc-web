import { PaginationEntity } from '@roc-web/web';

import { Prescriber } from './prescriber';

export type PrescriberPagination = Pick<
  PaginationEntity<Prescriber>,
  'entities' | 'pagination'
>;
