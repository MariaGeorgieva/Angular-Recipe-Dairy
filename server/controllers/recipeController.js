const { hasUser } = require('../middlewares/guards');
const { getAllRecipes } = require('../services/recipeService');

const recipeController = require('express').Router();

const { parseError } = require('../util/parser');


recipeController.get('/', async (req, res) => {

    let recipes = [];
    recipes = await getAllRecipes();
    res.json(recipes);
});

recipeController.post('/', hasUser(), async (req, res) => {
    try {
        const recipe = await create(data);
        res.json(recipe);
    } catch (err) {
        res.status(400).json({ err });
    }
});

module.exports = recipeController;