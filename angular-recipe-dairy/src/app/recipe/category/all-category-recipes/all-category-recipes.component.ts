import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/category';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-all-category-recipes',
  templateUrl: './all-category-recipes.component.html',
  styleUrls: ['./all-category-recipes.component.css']
})
export class AllCategoryRecipesComponent implements OnInit {

  allRecipes: IRecipe[] | null = null;
  categoryRecipe: ICategory | null = null;


  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.recipeService.getAllCategoryRecipe(id).subscribe({
      next: (value) => {
        this.categoryRecipe = value
        console.log("category all: " + this.categoryRecipe);

      },
      error: (err) => {
        console.error(err);
      }
    })
  }



}
