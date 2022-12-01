import { createActionGroup, props } from '@ngrx/store';

export const signinPageActions = createActionGroup({
  source: 'Signin Page',
  events: {
    Signin: props<{ password: string, userName: string; }>(),
  },
});
