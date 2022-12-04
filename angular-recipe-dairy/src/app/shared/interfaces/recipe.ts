import { IIngredient } from "./ingredient";
import { IUser } from "./user";

export interface IRecipe {
    titleRecipe: string;
    shortDescription: string;
    category: string[];
    meal: string;
    preparationTime: number;
    cookingTime: number;
    servings: number;
    difficulty: string;
    mainIngredient: IIngredient;
    ingredients: string[];
    preparation: string[];
    season: string;
    stars: number;
    image: string;
    ownerID: IUser;
    userLiked: IUser[];
    userSaved: IUser[];
}