import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/shared/interfaces/category';
import { IIngredient } from 'src/app/shared/interfaces/ingredient';
import { RecipeService } from '../../recipe.service';


interface Season {
  value: string;
  viewValue: string;
}

interface Meal {
  value: string;
  viewValue: string;
}

interface Difficulty {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit{
  constructor(
    private recipeService: RecipeService,
    private router: Router) { }

  categoryList: ICategory[] | null = null;
  mainIngredientList: IIngredient[] | null = null;

  selectedSeason: string | undefined;
  selectedMeal: string | undefined;
  selectedDifficulty: string | undefined;
  selectedCategory: string | undefined;
  selectedIngredient: string | undefined;

  difficulties: Difficulty[] = [
    { value: 'easy', viewValue: 'Easy' },
    { value: 'moderate', viewValue: 'Moderate' },
    { value: 'hard', viewValue: 'Hard' },
  ];

  seasons: Season[] = [
    { value: 'spring', viewValue: 'Spring' },
    { value: 'summer', viewValue: 'Summer' },
    { value: 'autumn', viewValue: 'Autumn' },
    { value: 'winter', viewValue: 'Winter' },
    { value: 'all-season', viewValue: 'All Season' },
  ];

  meals: Meal[] = [
    { value: 'breakfast', viewValue: 'Breakfast' },
    { value: 'lunch', viewValue: 'Lunch' },
    { value: 'Dinner', viewValue: 'Dinner' },
    { value: 'drinks', viewValue: 'Drinks' },
    { value: 'special-occasion', viewValue: 'Special occasion' },
    { value: 'other', viewValue: 'Other' },
  ];


  // categoryList.recipeService.loadAllRecipeCategories();
  ngOnInit(): void {
    this.recipeService.loadAllRecipeCategories().subscribe({
      next: (value) => {
        this.categoryList = value
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.recipeService.loadAllIngredients().subscribe({
      next: (value) => {
        this.mainIngredientList = value
      },
      error: (err) => {
        console.error(err);
      }
    })
    
  }
  newRecipeHandler(form: NgForm): void {
    if (form.invalid) { return; }
    this.recipeService.createRecipe(form.value)
      .subscribe(() => {
        this.router.navigate(['/recipe'])
      })
  }
}
