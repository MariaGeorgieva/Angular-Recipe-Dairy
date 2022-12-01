const { getAllCategories, createCategory } = require('../services/categoryService');

const categoryController = require('express').Router();

// const { hasUser, isAdmin} = require('../middlewares/guards');

// const { parseError } = require('../util/parser');


categoryController.get('/', async (req, res) => {
    let categories = [];
    categories = await getAllCategories();
    res.json(categories);
});

// recipeController.post('/', hasUser(), async (req, res) => {
categoryController.post('/', async (req, res) => {
    try {
        const data = req.body;
        const category = await createCategory(data);
        res.json(category);
    } catch (err) {
        res.status(400).json({ err });
    }
});

module.exports = categoryController;