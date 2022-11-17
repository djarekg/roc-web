import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { TokenResponse } from '../../models';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Set Claims': props<Pick<TokenResponse, 'claims'>>(),
    'Set Token': props<Pick<TokenResponse, 'token'>>(),
    'Remove Token': emptyProps(),
    'Set User': props<Pick<TokenResponse, 'user'>>(),
    Signin: props<{ userName: string; password: string }>(),
    Signout: emptyProps(),
    'Signout Confirmation': emptyProps(),
    'Signout Confirmation Dismiss': emptyProps(),
  },
});
