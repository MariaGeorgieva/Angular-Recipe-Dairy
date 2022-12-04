import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments'
import { ICategory } from '../shared/interfaces/category';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private httpClient:HttpClient) { }

  loadAllRecipeCategories(){
    return this.httpClient.get<ICategory[]>(`${apiUrl}/category`);
  }
}
