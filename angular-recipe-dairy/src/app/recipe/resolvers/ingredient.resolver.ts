import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import { Observable } from "rxjs";
import { IIngredient } from "src/app/shared/interfaces/ingredient";
import { RecipeService } from "../recipe.service";

@Injectable({
  providedIn: 'root'
})
export class IngredientResolver implements Resolve<IIngredient | null> {
  constructor(private recipeService: RecipeService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot): IIngredient | null | Observable<IIngredient> | Promise<IIngredient> {
    const ingredientId = route.params['id'];
    if (!ingredientId) {
      this.router.navigate(['/ingredient']);
      return null;
    }
    return this.recipeService.getIngredientById(ingredientId);
  }


}