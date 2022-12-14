import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments'
import { ICategory } from '../shared/interfaces/category';
import { IIngredient } from '../shared/interfaces/ingredient';
import { IRecipe } from '../shared/interfaces/recipe';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  // Recipes Categories
  loadAllRecipeCategories() {
    return this.httpClient.get<ICategory[]>(`${apiUrl}/category`);
  }

  createCategoryForRecipes(titleCategory: string, image: string) {
    return this.httpClient.post<ICategory[]>(`${apiUrl}/category/create`, { titleCategory: titleCategory, image: image });
  }

  getCategoryById(id: number) {
    return this.httpClient.get<ICategory>(`${apiUrl}/category/${id}`);
  }

  updateCategoryForRecipes(id: string | undefined, titleCategory: string, image: string) {
    return this.httpClient.put<ICategory>(`${apiUrl}/category/${id}`, { titleCategory: titleCategory, image: image });
  }

  deleteCategoryForRecipes(id: string | undefined) {
    return this.httpClient.delete<ICategory>(`${apiUrl}/category/${id}`);
  }

  // Ingredient 

  loadAllIngredients() {
    return this.httpClient.get<IIngredient[]>(`${apiUrl}/ingredient`);
  }

  getIngredientById(id: number) {
    return this.httpClient.get<IIngredient>(`${apiUrl}/ingredient/${id}`);
  }
  createIngredient(titleIngredient: string) {
    return this.httpClient.post<IIngredient[]>(`${apiUrl}/ingredient/create`, { titleIngredient: titleIngredient });
  }

  updateIngredient(id: string | undefined, titleIngredient: string) {
    return this.httpClient.put<IIngredient>(`${apiUrl}/ingredient/${id}`, { titleIngredient: titleIngredient });
  }

  deleteIngredient(id: string | undefined) {
    return this.httpClient.delete<IIngredient>(`${apiUrl}/ingredient/${id}`);
  }


  // Recipes 
  loadAllRecipes() {
    return this.httpClient.get<IRecipe[]>(`${apiUrl}/recipe`);
  }
  getRecipeById(id: number) {
    return this.httpClient.get<IRecipe>(`${apiUrl}/recipe/${id}`);
  }
  createRecipe(data:{}) {
    return this.httpClient.post<IRecipe[]>(`${apiUrl}/recipe/create`,  data );
  }
  //TODO
  updateRecipe(id: string | undefined, titleIngredient: string) {
    return this.httpClient.put<IRecipe>(`${apiUrl}/recipe/${id}`, { titleIngredient: titleIngredient });
  }

  deleteRecipes(id: string | undefined) {
    return this.httpClient.delete<IRecipe>(`${apiUrl}/recipe/${id}`);
  }

}
