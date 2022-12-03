import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { RecipeModule } from './recipe/recipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    RecipeModule,
    //the child must be under
    AppRoutingModule,
    BrowserModule,
    //core must be after BrowserModule
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
