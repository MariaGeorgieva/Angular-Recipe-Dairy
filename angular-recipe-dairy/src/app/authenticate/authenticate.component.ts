import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../shared/interfaces/user';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit{

  isAuthenticating = true;
  user: IUser | null = null;

  get isLoggedIn(): boolean {

    console.log('Authenticate isLoggedIn()' + this.user?.roles);

    return this.user !== null;
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
    this.authService.getProfile().subscribe({
    next: () => {

      this.isAuthenticating = false;
    },
    error: () => {
      this.isAuthenticating = false;
    }
  })
  }
}
