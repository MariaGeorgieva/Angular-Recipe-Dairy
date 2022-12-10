import { Component, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/shared/interfaces/ingredient';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.css']
})
export class RecipeIngredientComponent implements OnInit{

  ingredientList: IIngredient[] | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.loadAllIngredients().subscribe({
      next: (value) => {
        this.ingredientList = value
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
