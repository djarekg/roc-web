import { InjectionToken, inject } from '@angular/core';

import { WINDOW } from '../../tokens/window-token';

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'An abstraction over window.localStorage object',
  {
    factory: () => inject(WINDOW).localStorage,
  }
);
