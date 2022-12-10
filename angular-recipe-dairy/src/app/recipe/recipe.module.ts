import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecipeRoutingModule } from './recipe-routing.module';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

import { RecipeCategoryComponent } from './category/recipe-category/recipe-category.component';
import { CreateCategoryRecipeComponent } from './category/create-category-recipe/create-category-recipe.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RecipeIngredientComponent } from './ingredient/recipe-ingredient/recipe-ingredient.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CreateIngredientComponent } from './ingredient/create-ingredient/create-ingredient.component';
import { RecipeMainComponent } from './recipes/recipe-main/recipe-main.component';

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
    RecipeIngredientComponent,
    CreateIngredientComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    HttpClientModule, // TODO not sure for here or just import on app.module
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
    
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
