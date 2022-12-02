import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { IRecipe } from './shared/interfaces/recipe';


const apiURL = environment.apiURL;



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient ) { }

  loadAllRecipes() {
    return this.httpClient.get<IRecipe[]>(`${apiURL}/recipe`);
  }

  loadTheme(id: number) {
    return this.httpClient.get<IRecipe>(`${apiURL}/recipe/${id}`);
  }

  
}
