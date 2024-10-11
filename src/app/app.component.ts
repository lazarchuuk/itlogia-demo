import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {PizzaApiService} from './api/pizza-api.service';
import {Observable} from 'rxjs';
import {Pizza} from './api/data/interfaces';
import {AsyncPipe} from '@angular/common';
import {PizzaCardComponent} from './components/pizza-card/pizza-card.component';
import {ButtonComponent} from './components/button/button.component';
import {ProfileFormComponent} from './components/form/profile-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AsyncPipe, PizzaCardComponent, ButtonComponent, ProfileFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  pizza$ = new Observable<Pizza[]>();

  constructor(private readonly pizzaApiService: PizzaApiService) {
  }

  ngOnInit() {
    this.pizza$ = this.pizzaApiService.read();
  }
}
