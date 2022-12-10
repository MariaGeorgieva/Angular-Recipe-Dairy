// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CreateCategoryRecipeComponent } from './create-category-recipe/create-category-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeCategoryComponent } from './recipe-category/recipe-category.component';
import { RecipeIngredientComponent } from './recipe-ingredient/recipe-ingredient.component';
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
    component: RecipeIngredientComponent
  },
  {
    path: 'recipe',
    component: RecipeMainComponent,

    children: [
      {
        path: 'create',
        component: CreateRecipeComponent
      },
      {
        path: 'edit',
        component: EditRecipeComponent
      },
      // {
      //   path: 'details/:id',
      // resolve: {
      //   theme: ThemeResolver
      // },
      // component: ThemeDetailComponent
      // }
    ]
  }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RecipeRoutingModule { }
