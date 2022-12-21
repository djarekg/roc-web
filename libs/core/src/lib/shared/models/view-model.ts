import { type Pagination } from './pagination';

export interface ViewModel<T> extends Pagination {
  entities: ReadonlyArray<Readonly<T>>;
  loading: boolean;
}
