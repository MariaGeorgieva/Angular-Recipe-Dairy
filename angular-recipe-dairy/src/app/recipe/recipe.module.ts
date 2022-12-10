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
import { CreateCategoryRecipeComponent } from './create-category-recipe/create-category-recipe.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CategoryDetailsComponent } from './category-details/category-details.component';





@NgModule({
  declarations: [
    EditRecipeComponent,
    CreateRecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeMainComponent,
    RecipeCategoryComponent,
    CreateCategoryRecipeComponent,
    CategoryDetailsComponent
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
    CreateCategoryRecipeComponent
  ]
})
export class RecipeModule { }
