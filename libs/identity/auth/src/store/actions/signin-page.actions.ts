import { createActionGroup, props } from '@ngrx/store';

export const signinPageActions = createActionGroup({
  source: 'Signin Page',
  events: {
    Signin: props<{ userName: string; password: string }>(),
  },
});
