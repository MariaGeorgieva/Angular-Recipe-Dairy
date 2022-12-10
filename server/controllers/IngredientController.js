const { getAllIngredients, createIngredient, getIngredientIdById, updateIngredient, deleteIngredient } = require('../services/ingredientService');
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

ingredientController.post('/create', async (req, res) => {
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

ingredientController.get('/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const ingredient = await getIngredientIdById(req.params.id);
        res.json(ingredient);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

ingredientController.put('/:id', async (req, res) => {//TODO hasUser(), isAdmin(),
    const id = req.params.id;
    const data = req.body;
  

    try {
        await updateIngredient(id, data);
        const updatedIngredient = await getIngredientIdById(id);
    
        res.status(200).json(updatedIngredient);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});


ingredientController.delete('/:id', async (req, res) => {//hasUser(), isAdmin(),
    const id = req.params.id;
    console.log('ingredientController' + id);
    await deleteIngredient(id)
    res.status(200).json('Ingredient Deleted!')
});


module.exports = ingredientController;