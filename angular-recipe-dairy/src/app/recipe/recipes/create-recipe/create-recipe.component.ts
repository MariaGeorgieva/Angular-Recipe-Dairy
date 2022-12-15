import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/shared/interfaces/category';
import { IIngredient } from 'src/app/shared/interfaces/ingredient';
import { RecipeService } from '../../recipe.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


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

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    public fb: FormBuilder) { }

    categoryList: ICategory[] | null = null;
    mainIngredientList: IIngredient[] | null = null;

    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ];
    cars: Car[] = [
      {value: 'volvo', viewValue: 'Volvo'},
      {value: 'saab', viewValue: 'Saab'},
      {value: 'mercedes', viewValue: 'Mercedes'},
    ];
    foodControl = new FormControl(this.foods[2].value);
    carControl = new FormControl(this.cars[1].value);
    categoryControl = new FormControl(this.categoryList);
    // form = new FormGroup({
    
    // });
  form = this.fb.group({
    titleRecipe: ['', [Validators.required, Validators.minLength(3)]],
    shortDescription: ['', [Validators.required, Validators.minLength(3)]],
    // selectedCategory: ['', [Validators.required]],
    food: this.foodControl,
    car: this.carControl,
    selectedCategory: this.categoryControl,

    // selectFormControl: ['', [Validators.required]],
    // selectedMeal: ['', [Validators.required]],
    // selectedDifficulty: ['', [Validators.required]],
    // selectedIngredient: ['', [Validators.required]],
    // tel: [''],
    // pass: this.fb.group({
    //   password: ['', [Validators.required, Validators.minLength(5)]],
    //   rePassword: []
    // }, {
    // validators: [sameValueGroupValidator('password', 'rePassword')]

  });



  // isSubmitted = false;
  // animalControl: Animal[] | null = null;


  // selectedSeason: string | undefined;
  // selectedMeal: string | undefined;
  // selectedDifficulty: string | undefined;
  // selectedCategory: string | undefined;
  // selectedIngredient: string | undefined;

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

  // changeCategory(e: any) {
  //   this.category?.setValue(, {
  //     onlySelf: true,
  //   });
  // }
  
  // get value () {
  //   return this.form.get('userName').value
  // }
  // categoryList.recipeService.loadAllRecipeCategories();
 
  
  ngOnInit(): void {
    this.recipeService.loadAllRecipeCategories().subscribe({
      next: (value) => {
        this.categoryList = value
        console.log("categoryList" + this.categoryList)
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


  newRecipeHandler(): void {
    // this.authService.register(username!, email!, password!, rePassword!, tel || undefined)
    if (this.form.invalid) {
      console.log("Invalid Form");
      return;
    }
    // this.isSubmitted = true;
    const { titleRecipe, shortDescription, selectedCategory } = this.form.value;
    this.recipeService.createRecipe(titleRecipe, shortDescription, selectedCategory)
      .subscribe((user) => {
        this.router.navigate(['/recipe'])
      })
  }
}
