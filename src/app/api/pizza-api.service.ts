import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Pizza} from './data/interfaces';
import {pizza} from './data/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaApiService {
  constructor() { }

  read(): Observable<Pizza[]> {
    return of(pizza);
  }
}
