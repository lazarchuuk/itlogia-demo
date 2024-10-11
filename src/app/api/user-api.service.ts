import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor() {
  }

  saveUser(userData: User): Observable<boolean> {
    return of(true);
  }
}
