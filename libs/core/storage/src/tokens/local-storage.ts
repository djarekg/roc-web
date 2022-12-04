import { InjectionToken, inject } from '@angular/core';
import { WINDOW } from '@roc-web/core/shared';

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'An abstraction over window.localStorage object',
  {
    factory: () => inject(WINDOW).localStorage,
  }
);
