export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    roles: string;
    ownRecipes: string[];
    likedRecipes: string[];
    savedRecipes: string[];
    accessToken?: string;//don't know does needed
    __v: number;
}