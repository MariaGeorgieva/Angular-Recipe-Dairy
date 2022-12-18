import { IRecipe } from "./recipe";

export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    roles: string;
    ownRecipes: IRecipe[];
    likedRecipes: string[];
    savedRecipes: string[];
    accessToken: string;
    __v: number;
}