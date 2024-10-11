import {AfterViewInit, Component, computed, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonComponent} from '../button/button.component';
import {PizzaApiService} from '../../api/pizza-api.service';

@Component({
  selector: 'pc-profile-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss'
})
export class ProfileFormComponent {
  profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{6,}')]),
    }
  )
  phoneControl = this.profileForm.controls.phone;

  constructor(private readonly pizzaApiService: PizzaApiService) {
  }

  readonly customButtonSize = {
    width: '330px',
    height: '60px',
  }

  onKeyDown($event: KeyboardEvent) {
    const key = $event.code;
    return key !== 'Period';
  }

  onSubmit() {
    const userData = this.profileForm.getRawValue();

  }
}
