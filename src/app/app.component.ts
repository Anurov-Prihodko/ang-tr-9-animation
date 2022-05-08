import { Component } from '@angular/core';
import { changeWidthTriggr, divTrigger } from './app.animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger, changeWidthTriggr],
})
export class AppComponent {
  isVisible = false;

  onAnimationStart(event: AnimationEvent) {
    console.log('Start: ', event);
  }
  onAnimationDone(event: AnimationEvent) {
    console.log('Done: ', event);
  }
}
