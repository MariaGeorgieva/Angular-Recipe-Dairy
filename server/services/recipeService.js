const Category = require('../models/Category');
const Ingredient = require('../models/Ingredient');
const Recipe = require('../models/Recipe');


async function getAllRecipes() {
    return Recipe?.find({}).populate();
}

async function getRecipeById(recipeId) {
    return Recipe.findById(recipeId)
    .populate({
        path: 'ownerID',
        populate: {
            path: '_id'
        }
    }).populate({
        path: 'mainIngredient',
        populate: {
            path: '_id'
        }
    }).populate({
        path: 'category',
        populate: {
            path: '_id'
        }
    })
}

/**
 *
 * ----- most liked recipes

----- sort by date
----- sort by type {dinner, breakfast, lunch, bites, dessert default: other }
----- sort by category {cakes, pastries, pizza, muffin, default: other}
----- sort by ingreditent {chiken}
 */

//latest Recipes
async function getLatestsRecipes(limit) {
    limit = Number(req.query.limit) || 0; //don't forget to frontend
    return Recipe.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate();
}

// create Recipe
async function createRecipe(recipe) {
    return Recipe?.create(recipe);
}

//update recipe
async function updateRecipe(recipeId, data) {
    const existing = await Recipe.findById(recipeId);

    existing.titleRecipe = data.titleRecipe;
    existing.shortDescription = data.shortDescription;
    existing.category = data.category;
    existing.meal = data.meal;
    existing.difficulty = data.difficulty;
    existing.mainIngredient = data.mainIngredient;
    existing.preparationTime = data.preparationTime;
    existing.cookingTime = data.cookingTime;
    existing.servings = data.servings;
    existing.ingredients = data.ingredients;
    existing.preparation = data.preparation;
    existing.imageUrl = data.imageUrl;


    return await existing.save();
}


// delete Recipe
//delete Category
async function deleteRecipe(recipeId) {
    return Recipe.findByIdAndRemove(recipeId);
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    getLatestsRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
}