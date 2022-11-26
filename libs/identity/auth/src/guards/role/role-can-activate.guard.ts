import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectHasRouteRole } from '../../state/reducers';

export const roleCanActive = (): Observable<boolean> => {
  return inject(Store).select(selectHasRouteRole);
};
