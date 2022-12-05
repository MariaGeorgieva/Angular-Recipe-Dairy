import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeCategoryComponent } from './recipe-category/recipe-category.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    EditRecipeComponent,
    CreateRecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeMainComponent,
    RecipeCategoryComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    HttpClientModule, // TODO not sure for here or just i port on app.module
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
