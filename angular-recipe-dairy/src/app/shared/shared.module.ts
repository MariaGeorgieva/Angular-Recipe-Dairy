import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { ShortenPipe } from './pipes/shorten.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMessageComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoaderComponent,
    WelcomeMessageComponent,
    ShortenPipe
  ]
})
export class SharedModule { }
