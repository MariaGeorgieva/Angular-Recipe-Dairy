const { hasUser } = require('../middlewares/guards');
const { getAllRecipes, createRecipe } = require('../services/recipeService');

const recipeController = require('express').Router();

const { parseError } = require('../util/parser');


recipeController.get('/', async (req, res) => {

    let recipes = [];
    recipes = await getAllRecipes();
    res.json(recipes);
});

recipeController.post('/create', hasUser(), async (req, res) => {// hasUser(),

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
            imageUrl: req.body.imageUrl,
            ownerID: req.user._id
        }

        const recipe = await createRecipe(data);
        res.json(recipe);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

module.exports = recipeController;