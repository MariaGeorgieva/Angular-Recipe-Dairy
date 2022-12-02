import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const routes: Routes = [
  {
    path: 'recipe',
    children: [
      {
        path: 'create',
        component: CreateRecipeComponent
      },
      {
        path: 'edit',
        component: EditRecipeComponent
      },
      {
        path: 'details/:id',
        // resolve: {
        //   theme: ThemeResolver
        // },
        // component: ThemeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
