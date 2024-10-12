import {Component, computed, inject, input, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {Pizza} from '../../api/data/interfaces';
import {ButtonComponent} from '../button/button.component';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogTitle} from '@angular/material/dialog';

@Component({
  selector: 'pc-pizza-card',
  standalone: true,
  imports: [
    ButtonComponent,
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.scss',
})
export class PizzaCardComponent {
  @ViewChild('imagePreview') imagePreview: TemplateRef<any> | undefined;
  pizza = input<Pizza>();
  src = computed(() => `assets/images/pizza/${this.pizza()?.img}`);
  dialog = inject(MatDialog);

  openImage() {
    if (this.imagePreview) {
      this.dialog.open(this.imagePreview, {
        width: '80vw',
        maxWidth: '80vw',
        height: '70vh'
      });
    }
  }

  closePreview() {
    this.dialog.closeAll();
  }
}
