export interface IRecipe {
    titleRecipe: string;
    shortDescription: string;
    category: string[];
    meal: string;
    preparationTime: number;
    cookingTime: { type: Number, min: [1, 'Time for cooking must be at least 1 min'] },
    servings: { type: Number, min: [1, 'Serving must be at least 1'] },
    difficulty: {
        type: String,
        required: true,
        enum: ['easy', 'moderate', 'hard'],
        default: ['easy']
    },
    mainIngredient: {
        type: Types.ObjectId,
        required: true,
        ref: 'Ingredient'
    },
    ingredients: {
        type: [String],
        default: [],
    },
    preparation: { type: [String], default: [], required: true, minlength: [10, 'Preparation must be at least 10 characters long'] },
    season: {
        type: [String],
        enum: ['spring', 'summer', 'fall', 'winter', 'all season'],
        default: ['all season']
    },
    stars: { type: Number, min: 1, max: 5, default: 0 },
    // createdAt: { type: }
    image: { type: String, required: [true, 'Image URL is required'] },
    ownerID: { type: Types.ObjectId, ref: 'User', required: true },
    userLiked: {
        type: [Types.ObjectId],
        default: [],
        ref: 'User'
    },
    userSaved: {
        type: [Types.ObjectId],
        default: [],
        ref: 'User'
    }
}