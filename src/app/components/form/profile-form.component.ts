import {Component, inject, signal, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonComponent} from '../button/button.component';
import {UserApiService} from '../../api/user-api.service';
import {User} from '../../api/data/interfaces';
import {MatDialog, MatDialogActions} from '@angular/material/dialog';
import {switchMap} from 'rxjs';

@Component({
  selector: 'pc-profile-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    MatDialogActions
  ],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss'
})
export class ProfileFormComponent {
  @ViewChild('successMessage') successMessage!: TemplateRef<any>;

  profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{6,}')]),
    }
  )
  phoneControl = this.profileForm.controls.phone;
  dialog = inject(MatDialog);

  loading = signal(false);

  constructor(private readonly userApiService: UserApiService) {
  }

  onKeyDown($event: KeyboardEvent) {
    const key = $event.code;
    return key !== 'Period';
  }

  onSubmit() {
    this.loading.set(true);
    const userData = this.profileForm.getRawValue();

    this.userApiService.saveUser(userData as User)
      .pipe(switchMap(() =>
        this.dialog.open(this.successMessage, {
          width: '500px',
          maxWidth: '500px',
          height: '230px'
        }).afterClosed()
      ))
      .subscribe(() => {
        this.loading.set(false);
      })
  }

  closeMessage() {
    this.dialog.closeAll();
  }
}
