import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/shared/interfaces/category';
import { Difficulty } from 'src/app/shared/interfaces/difficulty';
import { IIngredient } from 'src/app/shared/interfaces/ingredient';
import { Meal } from 'src/app/shared/interfaces/meal';
import { Season } from 'src/app/shared/interfaces/season';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  @Input() difficulties? : Difficulty[];
  
  @ViewChild(
    NgForm,
    { static: true }
  ) form!: ElementRef<HTMLInputElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  categoryList: ICategory[] | null = null
  ingredientList: IIngredient[] | null = null

  // difficulties: Difficulty[] = [
  //   { value: 'easy', viewValue: 'Easy' },
  //   { value: 'moderate', viewValue: 'Moderate' },
  //   { value: 'hard', viewValue: 'Hard' },
  // ];

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


  idCategory = '';
  mainIngredient = '';
  difficulty = '';
  season = ''
  meal = '';

  newRecipeHandler(form: NgForm): void {
    if (form.invalid) {
      console.log("Invalid Form");
      return;
    }
    const {
      titleRecipe,
      shortDescription,
      idCategory: category,
      meal,
      difficulty,
      mainIngredient,
      season,
      preparationTime,
      cookingTime,
      servings,
      ingredients,
      preparation,
      imageUrl
    } = form.value;

    this.recipeService.createRecipe(titleRecipe,
      shortDescription,
      category,
      meal,
      difficulty,
      mainIngredient,
      season,
      preparationTime,
      cookingTime,
      servings,
      ingredients,
      preparation,
      imageUrl)
      .subscribe((user) => {
        this.router.navigate(['/recipe'])
      });
    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }


  ngOnInit(): void {
    this.recipeService.loadAllRecipeCategories().subscribe({
      next: (value) => {
        console.log(value);
        this.categoryList = value
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.recipeService.loadAllIngredients().subscribe({
      next: (value) => {
        console.log(value);
        this.ingredientList = value
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
