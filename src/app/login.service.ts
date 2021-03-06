import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn = new EventEmitter<boolean>(null);

  constructor() { }
}
