import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ICategory } from 'src/app/shared/interfaces/category';
import { difficulties, Difficulty } from 'src/app/shared/interfaces/difficulty';
import { IIngredient } from 'src/app/shared/interfaces/ingredient';
import { Meal, meals } from 'src/app/shared/interfaces/meal';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { Season, seasons } from 'src/app/shared/interfaces/season';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})


export class RecipeDetailsComponent implements OnInit, OnChanges {
  @Input()
  @Input()
  difficulties: Difficulty[] = difficulties;
  seasons: Season[] = seasons;
  meals: Meal[] = meals;

  [x: string]: any;
  recipe: IRecipe | undefined;
  inEditMode: boolean = false;
  isAuthor: boolean = false;


  constructor(private authService: AuthService, private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getRecipe();
    this.getCategory();
    this.getIngredients();

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.inEditMode) {
      console.log("changes " + changes, this.inEditMode);

    }

  }

  ngOnInit(): void {
    this.getRecipe();
    this.getCategory();
    this.getIngredients();
  }


  categoryList: ICategory[] | null = null
  ingredientList: IIngredient[] | null = null

  selectedCategory: ICategory | string | undefined;
  selectedIngredient: IIngredient | string | undefined;
  selectedMeal: string | undefined;
  selectedDifficulty: string | undefined;
  selectedSeason: string | undefined;
  category = '';
  mainIngredient = '';
  difficulty = '';
  season = ''
  meal = ''

  getCategory() {
    this.recipeService.loadAllRecipeCategories().subscribe({
      next: (value) => {
        console.log(value);
        this.categoryList = value
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getIngredients(): void {
    this.recipeService.loadAllIngredients().subscribe({
      next: (value) => {
        console.log(value);
        this.ingredientList = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getRecipe(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.recipeService.getRecipeById(id).subscribe({
      next: (recipe) => {
        this.recipe = recipe;

        if (this.authService.user?._id === this.recipe.ownerID?._id) {
          this.selectedCategory = this.recipe.category._id
          this.selectedMeal = this.recipe?.meal;
          this.selectedDifficulty = this.recipe?.difficulty;
          this.selectedIngredient = this.recipe?.mainIngredient._id;
          this.selectedSeason = this.recipe?.season;

          this.isAuthor = true
        }
      },
      error: (err) => {
        console.log(err)
        this.router.navigate(['**'])
      }
    })
  }

  editRecipe(form: NgForm) {

    if (this.isAuthor == false) {
      this.inEditMode = false;
      this.router.navigate(['**'])
    }
    const id = this.recipe?._id;

    const {
      titleRecipe, shortDescription, category, meal, difficulty, mainIngredient, season, preparationTime, cookingTime, servings, ingredients, preparation, imageUrl } = form.value
    this.recipeService.updateRecipe(id, titleRecipe, shortDescription, category, meal, difficulty, mainIngredient, season, preparationTime, cookingTime, servings, ingredients, preparation, imageUrl).subscribe({
      next: (recipe) => {
        this.recipe = recipe
        this.inEditMode = false;
      },
      error: (err) => console.log(err)
    });
  }
  delete() {

    if (this.isAuthor == false) {
      this.inEditMode = false;
      this.router.navigate(['**'])
    }
    const id = this.recipe?._id;
    this.recipeService.deleteRecipes(id).subscribe({
      next: () => this.router.navigate(['/recipe']),
      error: (err) => console.log(err)
    })
  }


  compareFn(option1: { name: any; }, option2: { name: any; }) {

    return option1.name === option2.name;

  }
}
