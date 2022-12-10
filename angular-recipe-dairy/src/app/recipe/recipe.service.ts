import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments'
import { ICategory } from '../shared/interfaces/category';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  loadAllRecipeCategories() {
    return this.httpClient.get<ICategory[]>(`${apiUrl}/category`);
  }

  createCategoryForRecipes(titleCategory: string, image: string) {
    return this.httpClient.post<ICategory[]>(`${apiUrl}/category/create`, { titleCategory: titleCategory, image: image });
  }

  getCategoryById(id:number){
    return this.httpClient.get<ICategory>(`${apiUrl}/category/${id}`);
  }

  updateCategoryForRecipes(id: string | undefined, titleCategory: string, image: string) {
    return this.httpClient.put<ICategory>(`${apiUrl}/category/${id}`, { titleCategory: titleCategory, image: image });
  }
  deleteCategoryForRecipes(id: string | undefined) {
    return this.httpClient.delete<ICategory>(`${apiUrl}/category/${id}`);
  }


}
