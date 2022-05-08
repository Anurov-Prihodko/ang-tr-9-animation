import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // void => *
  transition(':enter', [
    style({ height: '*', width: '*' }),
    group([
      animate(3000, style({ height: '200px', width: '200px' })),
      animate(
        6000,
        keyframes([
          style({ backgroundColor: 'grey' }),
          style({ backgroundColor: 'pink' }),
          style({ backgroundColor: 'orange' }),
        ])
      ),
    ]),
    animate(1000),
  ]),
  // * => void
  transition(':leave', animate(500, style({ opacity: 0 }))),
]);

export const changeWidthTriggr = trigger('changeWidth', [
  transition('* => *', [
    animate(1000, style({ height: '10px' })),
    animate(1000, style({ height: '*' })),
  ]),
]);
