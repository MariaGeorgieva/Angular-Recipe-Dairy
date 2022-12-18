const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /https?:\/\/./i;


const recipeSchema = new Schema({
    titleRecipe: { type: String, required: true, minlength: [3, 'Title must be at least 3 characters long'] },
    shortDescription: { type: String, minlength: [3, 'Intro must be at least 3 characters long'] },
    category: {
        type: Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    meal: {
        type: String,
        required: true,
        enum: ['breakfast', 'lunch', 'dinner', 'snack', 'drinks', 'special-occasion', 'other'],
        default: 'other',
    },
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
    season: {
        type: [String],
        required: true,
        enum: ['spring', 'summer', 'autumn', 'winter', 'all-season'],
        default: ['all-season']
    },
    preparationTime: { type: Number },
    cookingTime: { type: Number, min: [1, 'Time for cooking must be at least 1 min'] },
    servings: { type: Number, min: [1, 'Serving must be at least 1'] },
    ingredients: {
        type: [String],
        required: true,
        default: [],
        minlength: [10, 'Ingredients list must be at least 10 characters long']
    },
    preparation: { type: [String], default: [], required: true, minlength: [10, 'Preparation must be at least 10 characters long'] },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Image URL must be valid!'
        }
    },
    ownerID: { type: Types.ObjectId, ref: 'User', required: true },
    stars: { type: Number, min: 0, max: 5, default: 0 },
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