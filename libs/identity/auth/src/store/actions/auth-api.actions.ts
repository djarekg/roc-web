import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { type TokenResponse } from '../../models';

export const authApiActions = createActionGroup({
  events: {
    'Signin Failure': props<{ error: any }>(),
    'Signin Redirect': emptyProps(),
    'Signin Success': props<TokenResponse>(),
  },
  source: 'Auth Api',
});
