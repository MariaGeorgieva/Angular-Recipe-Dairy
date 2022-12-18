import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private authService: AuthService, private router: Router) { }

  isAdmin: boolean = false;
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get user() {
    if(this.authService.user?.roles === 'admin'){
      this.isAdmin = true
    }else {
      this.isAdmin = false;
    }
    return this.authService.user;
  }

}
