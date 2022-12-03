import { type EntityList } from '@roc-web/web/shared';

import { type Prescriber } from './prescriber';

export type PrescriberPagination = Pick<
  EntityList<Prescriber>,
  'entities' | 'pagination'
>;
