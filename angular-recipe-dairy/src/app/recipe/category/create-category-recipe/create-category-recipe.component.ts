import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-create-category-recipe',
  templateUrl: './create-category-recipe.component.html',
  styleUrls: ['./create-category-recipe.component.css']
})
export class CreateCategoryRecipeComponent {
  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  newCategoryHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { titleCategory, image } = form.value;

    this.recipeService.createCategoryForRecipes(titleCategory, image)
      .subscribe(() => {
        this.router.navigate(['/category'])
      })
  }
}
