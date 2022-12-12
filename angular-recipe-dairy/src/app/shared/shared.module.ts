import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoaderComponent,
    WelcomeMessageComponent
  ]
})
export class SharedModule { }
