import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable } from 'rxjs';

import { selectHasRouteRole } from '../../store/reducers';

export const roleCanActive = (): Observable<boolean> => {
  return inject(Store).select(selectHasRouteRole);
};
