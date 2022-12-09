import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  loginHandler(loginForm: NgForm): void {
    if (loginForm.invalid) { return; }
    const { email, password } = loginForm.value;
    this.authService.login(email!, password!)
      .subscribe(
        user => {
          // this.authService.setToken(JSON.stringify(user));  //works but try Ilia Idakiev


          console.log("login component " + user.roles + user.email);

          this.router.navigate(['/']);

        });
  }
}
