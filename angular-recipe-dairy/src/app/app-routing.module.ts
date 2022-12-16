import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthActivate } from './shared/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Homepage',
      loginRequired: false
    }
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
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],//for lazyLoading
  exports: [RouterModule]
})
export class AppRoutingModule { }
