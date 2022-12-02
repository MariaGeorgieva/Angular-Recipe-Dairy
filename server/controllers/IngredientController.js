const { getAllIngredients, createIngredient } = require('../services/ingredientService');
const { parseError } = require('../util/parser');

const ingredientController = require('express').Router();

ingredientController.get('/', async (req, res) => {
    try {
        const categories = await getAllIngredients();
        res.json(categories);
    } catch (error) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

ingredientController.post('/', async (req, res) => {
    try {
        const data = {
            titleIngredient: req.body.titleIngredient
        }
        const ingredient = await createIngredient(data);
        res.json(ingredient);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

module.exports = ingredientController;