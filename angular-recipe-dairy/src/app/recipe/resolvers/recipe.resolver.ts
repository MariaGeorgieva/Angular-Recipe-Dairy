import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ICategory } from "../../shared/interfaces/category";
import { RecipeService } from "../recipe.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeResolver implements Resolve<ICategory | null> {
  constructor(private recipeService: RecipeService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICategory | null | Observable<ICategory> | Promise<ICategory> {
    const categoryId = route.params['id'];
    if (!categoryId) {
      this.router.navigate(['/category']);
      return null;
    }
    return this.recipeService.getCategoryById(categoryId);
  }


}