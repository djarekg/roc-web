import { InjectionToken, inject } from '@angular/core';
import { WINDOW } from '@roc-web/core/shared';

export const SESSION_STORAGE = new InjectionToken<Storage>(
  'An abstraction over window.sessionStorage object',
  {
    factory: () => inject(WINDOW).sessionStorage,
  }
);
