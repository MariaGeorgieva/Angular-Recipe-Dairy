export interface IUser {
    _id: string;
    username: string;
    email: string;
    // password: string;
    roles: string;
    ownRecipes: string[];
    likedRecipes: string[];
    savedRecipes: string[];
    __v: number;
    created_at: string;
    updated_at: string;
}