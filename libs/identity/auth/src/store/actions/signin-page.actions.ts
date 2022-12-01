import { createActionGroup, props } from '@ngrx/store';

export const signinPageActions = createActionGroup({
  events: {
    Signin: props<{ password: string, userName: string; }>(),
  },
  source: 'Signin Page',
});
