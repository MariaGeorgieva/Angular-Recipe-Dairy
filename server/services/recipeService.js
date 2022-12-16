const  Recipe  = require('../models/Recipe');


async function getAllRecipes() {
    return Recipe?.find({}).populate();
}

async function getRecipeById(recipeId) {
    return Recipe.find(recipeId).populate();
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
    return Recipe.create(recipe);
}

// edit Recipe
// delete Recipe

module.exports = {
    getAllRecipes,
    getRecipeById,
    getLatestsRecipes,
    createRecipe,
}