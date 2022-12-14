import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable } from "rxjs";
import { IRecipe } from "src/app/shared/interfaces/recipe";
import { RecipeService } from "../recipe.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeResolver implements Resolve<IRecipe | null> {
  constructor(private recipeService: RecipeService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot): IRecipe | null | Observable<IRecipe> | Promise<IRecipe> {
    const recipeId = route.params['id'];
    if (!recipeId) {
      this.router.navigate(['/category']);
      return null;
    }
    return this.recipeService.getRecipeById(recipeId);
  }


}