import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
// import { HomepageComponent } from './core/homepage/homepage.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { RecipeMainComponent } from './recipe/recipes/recipe-main/recipe-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RecipeMainComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule)
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],//for lazyLoading
  exports: [RouterModule]
})
export class AppRoutingModule { }
