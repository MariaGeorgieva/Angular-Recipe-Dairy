import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecipeRoutingModule } from './recipe-routing.module';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';

import { RecipeCategoryComponent } from './category/recipe-category/recipe-category.component';
import { CreateCategoryRecipeComponent } from './category/create-category-recipe/create-category-recipe.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RecipeIngredientComponent } from './ingredient/recipe-ingredient/recipe-ingredient.component';

@NgModule({
  declarations: [
    CreateRecipeComponent,
    EditRecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeMainComponent,
    RecipeCategoryComponent,
    CreateCategoryRecipeComponent,
    CategoryDetailsComponent,
    RecipeIngredientComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    HttpClientModule, // TODO not sure for here or just i port on app.module
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [
    RecipeListComponent,
    CreateRecipeComponent,
    RecipeCategoryComponent,
    CreateCategoryRecipeComponent,
    CategoryDetailsComponent
  ]
})
export class RecipeModule { }
