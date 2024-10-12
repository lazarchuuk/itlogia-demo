import {Component, input, output} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'pc-button',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  name = input<string>();
  disabled = input<boolean>(false);
  width = input<number>(224);
  height = input<number>(60);
  click = output();

  onClick() {
    this.click.emit();
  }
}
