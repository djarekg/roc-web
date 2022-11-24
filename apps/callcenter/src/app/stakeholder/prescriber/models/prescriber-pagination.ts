import { EntityList } from '@roc-web/web';

import { Prescriber } from './prescriber';

export type PrescriberPagination = Pick<
  EntityList<Prescriber>,
  'entities' | 'pagination'
>;
