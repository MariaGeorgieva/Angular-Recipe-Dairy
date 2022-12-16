import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  get user() {
    
    const { username, email, roles, ownRecipes, likedRecipes, savedRecipes } = this.authService.user!;
    return {
      username,
      email,
      roles,
      ownRecipes,
      likedRecipes,
      savedRecipes

    }
  }

  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // this.createForm({ ...this.user, addresses: [{ postCode: 'Hello', street: 'World' }] });
  }

  // createForm(formValue: any) {
  //   this.form = this.fb.group({
  //     username: [formValue.username, [Validators.required, Validators.minLength(5)]],
  //     email: [formValue.email, [Validators.required, appEmailValidator(appEmailDomains)]],
  //     ext: [formValue.ext],
  //     tel: [formValue.tel],
  //     addresses: this.fb.array(
  //       new Array(this.counter).fill(null).map((_, i) => {
  //         return this.fb.group({
  //           postCode: formValue.addresses[i]?.postCode || '',
  //           street: formValue.addresses[i]?.street || ''
  //         })
  //       })
  //     )
  //   })

  // }


  // saveProfile(): void {
  //   this.formSubmitted = true;
  //   if (this.form.invalid) { return; }
  //   const { username, email, ext, tel } = this.form.value;
  //   this.authService.setProfile(username, email, ext + ' ' + tel).subscribe(() => {
  //     this.toggleEditMode();
  //   });
  // }
}