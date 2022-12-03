import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // test data

  user: IUser | null = {
    username: 'mlove',
    // email: 'test@gmail.bg',
    // tel: '00359 123123123'
  } as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  
  constructor() { }
}
