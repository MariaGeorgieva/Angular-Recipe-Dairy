import { IRecipe } from "./recipe";

export interface ICategory {
    _id: string;
    titleCategory: string;
    image: string;
    recipesID: IRecipe[];
    __v: number;
    created_at: string;
    updated_at: string;
}