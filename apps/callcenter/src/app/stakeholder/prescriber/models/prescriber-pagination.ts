import { type EntityList } from '@roc-web/core';

import { type Prescriber } from './prescriber';

export type PrescriberPagination = Pick<EntityList<Prescriber>, 'entities' | 'pagination'>;
