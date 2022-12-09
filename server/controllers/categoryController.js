const { hasUser, isAdmin } = require('../middlewares/guards');
const { getAllCategories, createCategory } = require('../services/categoryService');
const { parseError } = require('../util/parser');

const categoryController = require('express').Router();


categoryController.get('/', async (req, res) => {
  
    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

categoryController.post('/', hasUser(), isAdmin(), async (req, res) => {
    try {
        const data = {
            titleCategory: req.body.titleCategory,
            image: req.body.image
        }

        const category = await createCategory(data);
        res.json(category);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

module.exports = categoryController;