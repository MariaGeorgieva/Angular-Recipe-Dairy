const Ingredient = require('../models/Ingredient');


async function getAllIngredients() {
    return Ingredient?.find({}).populate();
}

async function getIngredientIdById(ingredientId) {
    return Ingredient?.findById(ingredientId).populate();
}

// create IngredientId
async function createIngredient(ingredient) {
    return Ingredient.create(ingredient);
}

async function updateIngredient(ingredientId, data) {
    const existing = await Ingredient.findById(ingredientId);

    existing.titleIngredient = data.titleIngredient;

    return await existing.save();
}

async function deleteIngredient(ingredientId) {
    return Ingredient.findByIdAndRemove(ingredientId);
}


// async function getRecipesByCategory(categoryId) {
//     const allRecipes = await Category?.findById(categoryId);
//     return Category?.findOne({ allRecipes: recipesID }).populate();
// }



module.exports = {
    getAllIngredients,
    getIngredientIdById,
    createIngredient,
    updateIngredient,
    deleteIngredient
}