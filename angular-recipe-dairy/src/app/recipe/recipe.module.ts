import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';


@NgModule({
  declarations: [
    EditRecipeComponent,
    CreateRecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeMainComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
