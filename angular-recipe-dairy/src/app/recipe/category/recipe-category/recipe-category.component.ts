import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.css']
})

export class RecipeCategoryComponent implements OnInit {

  categoryList: ICategory[] | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.loadAllRecipeCategories().subscribe({
      next: (value) => {
        this.categoryList = value
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
