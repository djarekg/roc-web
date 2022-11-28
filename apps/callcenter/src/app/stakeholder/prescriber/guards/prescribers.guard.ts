import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { prescribersGuardActions } from '@roc-web/callcenter/stakeholder/prescriber/store/actions';
import { selectLoaded } from '@roc-web/callcenter/stakeholder/prescriber/store/reducers';
import { filter, first, type Observable, tap } from 'rxjs';

export const canActivate = (): Observable<boolean> => {
  const store = inject(Store);

  return store.select(selectLoaded).pipe(
    tap(isLoaded => {
      if (!isLoaded) {
        store.dispatch(prescribersGuardActions.loadPrescribers());
      }
    }),
    filter(isLoaded => isLoaded),
    first()
  );
};
