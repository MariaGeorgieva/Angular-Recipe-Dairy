import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
// import {
//   ChangeDetectionStrategy,
//   Component,
//   Inject,
//   PLATFORM_ID,
// } from '@angular/core';
// import { filter, map, pairwise, throttleTime, switchMap } from 'rxjs/operators';

// import { fromEvent, of } from 'rxjs';
// import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private authService: AuthService, private router: Router) { }
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get user() {
    return this.authService.user;
  }

}
