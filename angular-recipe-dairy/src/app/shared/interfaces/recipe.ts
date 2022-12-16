import { IIngredient } from "./ingredient";
import { IUser } from "./user";

export interface IRecipe {
    _id: string;
    titleRecipe: string;
    shortDescription: string;
    category: string;
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
    imageUrl: string;
    ownerID: IUser;
    userLiked: IUser[];
    userSaved: IUser[];
}