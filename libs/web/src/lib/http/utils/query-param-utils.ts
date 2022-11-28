import { HttpParams } from '@angular/common/http';
import { type Sort } from '@angular/material/sort';
import { MAX_PAGE_SIZE } from '../../shared/constants';
import { type Pagination } from '../../shared/models';

export function createHttpParams(params: {
  [key: string]: boolean | number | string;
}): HttpParams {
  return Object.keys(params).reduce((httpParams, key) => {
    return httpParams.set(key, params[key]);
  }, new HttpParams());
}

export function createHttpPaginationParams(
  filter: string | null,
  pagination: Pagination,
  sort: Sort
): HttpParams {
  const { pageIndex } = pagination;
  const { active: sortColumn, direction } = sort;

  return createHttpParams({
    filterText: filter ?? '',
    isSortDesc: direction === 'desc',
    pageIndex,
    pageSize: MAX_PAGE_SIZE,
    sortColumn,
  });
}
