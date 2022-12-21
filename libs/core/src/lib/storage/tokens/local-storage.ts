import { InjectionToken, inject } from '@angular/core';

import { WINDOW } from '../../shared/tokens';

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'An abstraction over window.localStorage object',
  {
    factory: () => inject(WINDOW).localStorage,
  },
);
