const  Ingredient  = require('../models/Ingredient');


async function getAllIngredients() {
    return Ingredient?.find({}).populate();
}

async function getIngredientIdById(ingredientId) {
    return Ingredient?.find(ingredientId).populate();
}

// create IngredientId
async function createIngredient(ingredient) {
    return Ingredient.create(ingredient);
}



module.exports = {
getAllIngredients,
getIngredientIdById,
createIngredient
}