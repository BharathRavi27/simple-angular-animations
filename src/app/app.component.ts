import { Component } from '@angular/core';

import {
  trigger, state, style, transition, animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slide', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('300ms ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('300ms ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent {
  show = 'show';

  toggle() {
    debugger
    this.show == 'show' ? this.show = 'hide' : this.show = 'show';
  }

}

