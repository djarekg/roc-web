import { HttpParams } from '@angular/common/http';
import { Sort } from '@angular/material/sort';

import { Pagination } from '../../shared/models';

export function createHttpParams(params: {
  [key: string]: string | number | boolean;
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
  const { pageIndex, pageSize } = pagination;
  const { active: sortColumn, direction } = sort;

  return createHttpParams({
    ...(!!filter && { filterText: filter }),
    isSortDesc: direction === 'desc',
    pageIndex,
    pageSize: 10, // TODO: Use default pageSize until find better solution
    sortColumn,
  });
}
