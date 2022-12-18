import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ICategory } from 'src/app/shared/interfaces/category';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})

export class CategoryDetailsComponent {
  category: ICategory | undefined;
  inEditMode: boolean = false;
  isAdmin: boolean = false;
  

  constructor(private authService:AuthService, private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getCategory();

  }

  getCategory(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.recipeService.getCategoryById(id).subscribe({
      next: (category) => {
        this.category = category;
      
        if(this.authService.user?.roles === 'admin'){
          this.isAdmin = true
          console.log("Is Admin")
        }else {
          this.isAdmin = false;
        }
      },
      error: (err) => {
        console.log(err)
        this.router.navigate(['**'])
      }
    })
  }

  editCategory(form: NgForm) {
    //TODO 
    // if(this.userService.user?._id != this.category?.owner._id || !this.token){
    //   this.router.navigate(['**'])
    // }
    const id = this.category?._id;
    const { titleCategory, image } = form.value
    this.recipeService.updateCategoryForRecipes(id, titleCategory, image).subscribe({
      next: (category) => {
        this.category = category
        this.inEditMode = false;
      },
      error: (err) => console.log(err)
    })
  }

  delete() {
    //TODO
    // if(this.userService.user?._id != this.category?.owner._id || !this.token){
    //   this.router.navigate(['**'])
    // }
    const id = this.category?._id;
    this.recipeService.deleteCategoryForRecipes(id).subscribe({
      next: () => this.router.navigate(['/category']),
      error: (err) => console.log(err)
    })
  }
}
