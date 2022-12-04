import { DOCUMENT } from '@angular/common';
import { InjectionToken, inject } from '@angular/core';

export const WINDOW = new InjectionToken<Window>(
  'An abstraction over global window object',
  {
    factory: () => {
      const { defaultView } = inject(DOCUMENT);

      if (defaultView) {
        return defaultView;
      }

      throw new Error('Window is not available');
    },
  }
);
