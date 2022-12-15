const { hasUser } = require('../middlewares/guards');
const { getAllRecipes, createRecipe } = require('../services/recipeService');

const recipeController = require('express').Router();

const { parseError } = require('../util/parser');


recipeController.get('/', async (req, res) => {

    let recipes = [];
    recipes = await getAllRecipes();
    res.json(recipes);
});

recipeController.post('/create', async (req, res) => {// hasUser(),

    console.log("Create Recipe ");
    console.log("req.user:  " + req.user);
    try {
        const data = {
            titleRecipe: req.body.titleRecipe,
            shortDescription: req.body.shortDescription,
            category: req.body.category,
            meal: req.body.meal,
            preparationTime: req.body.preparationTime,
            cookingTime: req.body.cookingTime,
            servings: req.body.servings,
            difficulty: req.body.difficulty,
            mainIngredient: req.body.mainIngredient,
            ingredients: req.body.ingredients,
            preparation: req.body.preparation,
            season: req.body.season,
            ownerID: req.user._id
        }

        const recipe = await createRecipe(data);
        res.json(recipe);
    } catch (err) {
        res.status(400).json({ message });
    }
});

module.exports = recipeController;