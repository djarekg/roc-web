import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { type TokenResponse } from '../../models';

export const authApiActions = createActionGroup({
  source: 'Auth Api',
  events: {
    'Signin Success': props<TokenResponse>(),
    'Signin Failure': props<{ error: any }>(),
    'Signin Redirect': emptyProps(),
  },
});
