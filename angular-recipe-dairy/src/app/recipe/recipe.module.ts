import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeMainComponent } from './recipes/recipe-main/recipe-main.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

import { RecipeCategoryComponent } from './category/recipe-category/recipe-category.component';
import { CreateCategoryRecipeComponent } from './category/create-category-recipe/create-category-recipe.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';

import { RecipeIngredientComponent } from './ingredient/recipe-ingredient/recipe-ingredient.component';
import { CreateIngredientComponent } from './ingredient/create-ingredient/create-ingredient.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import { AllCategoryRecipesComponent } from './category/all-category-recipes/all-category-recipes.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateRecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeMainComponent,
    RecipeCategoryComponent,
    CreateCategoryRecipeComponent,
    CategoryDetailsComponent,
    RecipeIngredientComponent,
    CreateIngredientComponent,
    AllCategoryRecipesComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    HttpClientModule, // TODO not sure for here or just import on app.module
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    LayoutModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatNativeDateModule,
    SharedModule,
    
    // MaterialExampleModule
  ],
  exports: [
    RecipeListComponent,
    CreateRecipeComponent,
    RecipeCategoryComponent,
    CreateCategoryRecipeComponent,
    CategoryDetailsComponent
  ],
  
})
export class RecipeModule { }
