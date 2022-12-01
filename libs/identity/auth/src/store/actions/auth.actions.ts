import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { type TokenResponse } from '../../models';

export const authActions = createActionGroup({
  events: {
    'Set User': props<Pick<TokenResponse, 'user'>>(),
    Signin: props<{ password: string, userName: string; }>(),
    Signout: emptyProps(),
    'Signout Confirmation': emptyProps(),
    'Signout Confirmation Dismiss': emptyProps(),
  },
  source: 'Auth',
});
