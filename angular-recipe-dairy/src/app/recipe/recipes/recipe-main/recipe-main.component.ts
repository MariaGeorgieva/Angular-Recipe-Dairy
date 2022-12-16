import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-main',
  templateUrl: './recipe-main.component.html',
  styleUrls: ['./recipe-main.component.css']
})
export class RecipeMainComponent implements OnInit{


  recipeList: IRecipe[]| null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.loadAllRecipes().subscribe({
      next: (value) => {
        this.recipeList = value
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
