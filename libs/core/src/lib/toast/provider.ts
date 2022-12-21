import { type Provider } from '@angular/core';

import { ToastService } from './shared/services';

export const TOAST_SERVICE: Provider = {
  provide: ToastService,
  useClass: ToastService,
};
