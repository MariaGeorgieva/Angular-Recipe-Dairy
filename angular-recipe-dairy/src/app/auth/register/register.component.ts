// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   //MD property to hide text attribute label on click event
//   hide = true;

//   // @ViewChild(NgForm, { static: true }) registerForm!: ElementRef<HTMLInputElement>;

//   constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

//   registerHandler(registerForm: NgForm) {
//     if (registerForm.invalid) { return; }

//     const { username, email, password, rePassword } = registerForm.value;
//     console.log("registerHandler " + password, rePassword);
//     console.log("registerHandler " + (password === rePassword));

//     this.authService.register(username, email, password, rePassword)
//       .subscribe(res => console.log("subscribe "+(password == rePassword) + res));
//     // .subscribe(user =>
//     //   this.authService.user = user);
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { catchError, map, of, throwError } from 'rxjs';
// import { appEmailDomains } from 'src/app/shared/constants';
import { sameValueGroupValidator } from 'src/app/shared/validators/same-value-group-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  });

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  registerHandler() {
    
    if (this.form.invalid) { return; }
    const { username, email, pass: { password, rePassword } = {} } = this.form.value;
    this.authService.register(username!, email!, password!, rePassword!)
      .subscribe(user => {
        this.router.navigate(['/']);
      });

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigate([returnUrl]);
  }

}
