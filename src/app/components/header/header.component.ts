import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'pc-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    MatIcon,
    MatMenuTrigger,
    MatMenu,
  ],
  animations: [
    // Define the custom animation trigger
    trigger('animateText', [
      // Defining the hidden state
      state('menu', style({
        transform: 'rotate(0)'
      })),
      // Defining the visible state
      state('close', style({
        transform: 'rotate(90deg)'
      })),
      transition('menu => close', [
        animate('200ms ease-out')
      ]),
      transition('close => menu', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class HeaderComponent {
  icon: 'menu' | 'close' = 'menu';
}
