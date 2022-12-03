// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeCategoryComponent } from './recipe-category/recipe-category.component';
import { RecipeIngredientComponent } from './recipe-ingredient/recipe-ingredient.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';

const routes: Routes = [
  {
    path: 'category',
    title: 'Recipe Categories',
    component: RecipeCategoryComponent
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
