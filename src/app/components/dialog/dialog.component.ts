import {Component, inject, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {ButtonComponent} from '../button/button.component';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'pc-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    ButtonComponent,
    MatDialogTitle
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onClose() {
    this.dialogRef.close();
  }
}
