import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
// import {  } from './shared/';
import { RecipeModule } from './recipe/recipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
  ],
  imports: [
    AuthModule,
    RecipeModule,
    AppRoutingModule,
    //the child must be under
    BrowserModule,
    //core must be after BrowserModule
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],

  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
