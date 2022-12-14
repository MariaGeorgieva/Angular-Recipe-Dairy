import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IIngredient } from 'src/app/shared/interfaces/ingredient';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.css']
})
export class RecipeIngredientComponent implements OnInit {

  ingredientList: IIngredient[] | null = null;
  ingredient: IIngredient | undefined;
  inEditMode: boolean = false;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

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
  //TODO EDIT

  editIngredient(form: NgForm, _id: string) {
    //TODO
    // if(this.userService.user?._id != this.category?.owner._id || !this.token){
    //   this.router.navigate(['**'])
    // }
    // const id = this.ingredient?._id;
    const { titleIngredient } = form.value
    this.recipeService.updateIngredient(_id, titleIngredient).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient
        this.inEditMode = false;
      },
      error: (err) => console.log(err)
    })
  }

  delete(_id: string): void {
    // if(this.userService.user?._id != this.category?.owner._id || !this.token){
    //   this.router.navigate(['**'])
    // }
    //  id = this.ingredient?._id;
    this.recipeService.deleteIngredient(_id).subscribe({
      next: () => this.router.navigate(['/ingredient']),
      error: (err) => console.log(err)
    })
  }
}


