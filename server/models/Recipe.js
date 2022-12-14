const { Schema, model, Types } = require('mongoose');

const recipeSchema = new Schema({
    titleRecipe: { type: String, required: true, minlength: [3, 'Title must be at least 3 characters long'] },
    shortDescription: { type: String, minlength: [3, 'Intro must be at least 3 characters long'] },
    category: {
        type: [Types.ObjectId],
        default: [],
        required: true,
        ref: 'Category'
    },
    meal: {
        type: String,
        required: true,
        enum: ['breakfast', 'lunch', 'dinner', 'snack', 'drinks', 'special-occasion','other'],
        default: 'other',
    },
    preparationTime: { type: Number },
    cookingTime: { type: Number, min: [1, 'Time for cooking must be at least 1 min'] },
    servings: { type: Number, min: [1, 'Serving must be at least 1'] },
    difficulty: {
        type: String,
        required: true,
        enum: ['easy', 'moderate', 'hard'],
        default: 'easy'
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
        required: true,
        enum: ['spring', 'summer', 'autumn', 'winter', 'all-season'],
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
}, { timestamps: { createdAt: 'created_at' } });


const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;