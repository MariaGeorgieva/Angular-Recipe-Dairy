import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/shared/interfaces/category';
import { difficulties, Difficulty } from 'src/app/shared/interfaces/difficulty';
import { IIngredient } from 'src/app/shared/interfaces/ingredient';
import { Meal, meals } from 'src/app/shared/interfaces/meal';
import { Season, seasons } from 'src/app/shared/interfaces/season';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  @Input()
  difficulties: Difficulty[] = difficulties;
  seasons: Season[] = seasons;
  meals: Meal[] = meals;


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
        this.categoryList = value;
        console.log("difficulties " + difficulties.values);

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
