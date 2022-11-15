import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 20,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%', opacity: 0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('600ms ease-in-out', style({ left: '100%', opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [animate('600ms ease-in-out', style({ left: '0%', opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 20,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-in-out', style({ left: '100%', opacity: 0 })),
      ]),
      query(':enter', [animate('600ms ease-in-out', style({ left: '0%' }))]),
      query('@*', animateChild()),
    ]),
  ]),
]);
