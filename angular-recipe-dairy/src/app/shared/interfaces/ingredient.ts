import { IRecipe } from "./recipe";

export interface IIngredient {
    _id: string;
    titleIngredient: string;
    recipesID: IRecipe[];
    __v: number;
    created_at: string;
    updated_at: string;
}