import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent {

  constructor(private recipeService: RecipeService, private router: Router){}

  newIngredientHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { titleIngredient,} = form.value;

    this.recipeService.createIngredient(titleIngredient)
      .subscribe(() => {
        this.router.navigate(['/ingredient'])
      })
  }
}
