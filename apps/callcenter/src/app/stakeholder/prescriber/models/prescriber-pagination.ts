import { type EntityList } from '@roc-web/web';
import { type Prescriber } from './prescriber';

export type PrescriberPagination = Pick<
  EntityList<Prescriber>,
  'entities' | 'pagination'
>;
