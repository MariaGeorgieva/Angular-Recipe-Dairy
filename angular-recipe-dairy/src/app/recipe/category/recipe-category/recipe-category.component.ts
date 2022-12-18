import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ICategory } from 'src/app/shared/interfaces/category';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.css']
})

export class RecipeCategoryComponent implements OnInit {

  categoryList: ICategory[] | null = null;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.loadAllRecipeCategories().subscribe({
      next: (value) => {
        this.categoryList = value;
        if (this.authService.user?.roles === 'admin') {
          this.isAdmin = true
          console.log("Is Admin")
        } else {
          this.isAdmin = false;
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
