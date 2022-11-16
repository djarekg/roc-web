import { HttpParams } from '@angular/common/http';

import { PaginationOptions } from '../../shared/models';

export function createHttpParams(options: PaginationOptions): HttpParams {
  return new HttpParams({
    fromObject: {
      pageIndex: options.pageIndex.toString(),
      pageSize: options.pageSize.toString(),
      filter: options.filter,
      sortColumn: options.sortColumn,
      isSortDescending: options.isSortDescending.toString(),
    },
  });
}
