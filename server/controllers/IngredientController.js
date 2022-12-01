const {getAllIngredients, createIngredient } = require('../services/ingredientService');

const ingredientController = require('express').Router();

// const { hasUser } = require('../middlewares/guards');

// const { parseError } = require('../util/parser');


ingredientController.get('/', async (req, res) => {
    let categories = [];
    categories = await getAllIngredients();
    res.json(categories);
});

// ingredientController.post('/', hasUser(), isAdmin(), async (req, res) => {
    ingredientController.post('/', async (req, res) => {
    try {
        const data = req.body;
        const ingredient = await createIngredient(data);
        res.json(ingredient);
    } catch (err) {
        res.status(400).json({ err });
    }
});

module.exports = ingredientController;