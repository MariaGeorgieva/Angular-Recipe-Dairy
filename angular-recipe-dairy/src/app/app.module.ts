import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CreateRecipeComponent } from './recipe/create-recipe/create-recipe.component';
import { RecipeCategoryComponent } from './recipe/recipe-category/recipe-category.component';
import { RecipeIngredientComponent } from './recipe/recipe-ingredient/recipe-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    FooterComponent,
    NavigationComponent,
    HomepageComponent,
    PageNotFoundComponent,
    CreateRecipeComponent,
    RecipeCategoryComponent,
    RecipeIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
