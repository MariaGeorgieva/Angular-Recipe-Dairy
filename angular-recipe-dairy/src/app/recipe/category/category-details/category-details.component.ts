import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  token: string | null = localStorage.getItem('accessToken')
  // isAuthor: boolean = false;
  // isAdmin: boolean = false;

  // constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getCategory()
  }
  
  getCategory(): void {
    this.category = undefined;
    const id = this.activatedRoute.snapshot.params['id'];
    this.recipeService.getCategoryById(id).subscribe({
      next: (category) => {
        this.category = category
        // if(this.userService.user?._id == category.owner._id){
        //   this.isAuthor = true
        // }else {
        //   this.isAuthor = false;
        // }
      },
      error: (err) => {
        console.log(err)
        this.router.navigate(['**'])
      }
    })
  }
  
  editCategory(form: NgForm) {
    // if(this.userService.user?._id != this.category?.owner._id || !this.token){
    //   this.router.navigate(['**'])
    // }
    const id = this.category?._id;
    const {titleCategory, image } = form.value
    this.recipeService.updateCategoryForRecipes(id, titleCategory, image).subscribe({
      next: (category) => {
        this.category = category
        this.inEditMode = false;
      },
      error: (err) => console.log(err)
    })
  }
  
  delete(){
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
