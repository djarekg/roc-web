import { HttpParams } from '@angular/common/http';

import { PaginationOptions } from '../../shared/models';

export function createHttpParams(options: PaginationOptions): HttpParams {
  return new HttpParams({
    fromObject: {
      pageIndex: options.pageIndex,
      pageSize: options.pageSize,
      filter: options.filter,
      sort: options.sort.active,
    },
  });
}
