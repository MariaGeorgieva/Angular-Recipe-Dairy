// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CreateCategoryRecipeComponent } from './category/create-category-recipe/create-category-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeCategoryComponent } from './category/recipe-category/recipe-category.component';
import { RecipeIngredientComponent } from './ingredient/recipe-ingredient/recipe-ingredient.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';

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
        // path: 'create',
        // component: 

      },
      {
        // path: ':id',
        // component: CategoryDetailsComponent

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
        path: 'edit',
        component: EditRecipeComponent
      },
    ]
  }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RecipeRoutingModule { }
