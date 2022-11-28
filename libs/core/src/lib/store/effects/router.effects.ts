import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';

import * as fromRoot from '../reducers';

@Injectable()
export class RouterEffects {
  readonly #actions$ = inject(Actions);
  readonly #store = inject(Store);
  readonly #titleService = inject(Title);

  updateTitle$ = createEffect(
    () => {
      return this.#actions$.pipe(
        ofType(routerNavigatedAction),
        concatLatestFrom(() => this.#store.select(fromRoot.selectTitle)),
        map(([, title]) => `Call Center ${title ? ' - ' : ''}${title ?? ''}`),
        tap(title => this.#titleService.setTitle(title))
      );
    },
    {
      dispatch: false,
    }
  );
}
