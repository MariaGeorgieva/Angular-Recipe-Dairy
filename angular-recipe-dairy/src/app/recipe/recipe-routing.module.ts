import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { RecipeCategoryComponent } from './category/recipe-category/recipe-category.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CreateCategoryRecipeComponent } from './category/create-category-recipe/create-category-recipe.component';

import { RecipeIngredientComponent } from './ingredient/recipe-ingredient/recipe-ingredient.component';
import { CreateIngredientComponent } from './ingredient/create-ingredient/create-ingredient.component';
import { RecipeMainComponent } from './recipes/recipe-main/recipe-main.component';
import { AllCategoryRecipesComponent } from './category/all-category-recipes/all-category-recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: 'category',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RecipeCategoryComponent,
      },

      {
        path: 'create',
        component: CreateCategoryRecipeComponent

      },
      {
        path: ':id',
        component: CategoryDetailsComponent

      },
      {
        path: 'all-category-recipes/:id',
        component: AllCategoryRecipesComponent

      },

    ],
  },
  {
    path: 'ingredient',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RecipeIngredientComponent,
      },

      {
        path: 'create',
        component: CreateIngredientComponent

      },
      

    ],
  },
  {
    path: 'recipe',
    children: [

      {
        path: '',
        pathMatch: 'full',
        component: RecipeMainComponent,
      },
      {
        path: 'create',
        component: CreateRecipeComponent
      },
      {
        path: ':id',
        component: RecipeDetailsComponent
      },
   
    ]
  }
];

// export const RecipeRoutingModule = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
