const { hasUser, isAdmin } = require('../middlewares/guards');
const { getAllCategories, createCategory, getCategoryById, updateCategory, deleteCategory, getRecipesByCategory } = require('../services/categoryService');
const { getRecipeById } = require('../services/recipeService');
const { parseError } = require('../util/parser');

const categoryController = require('express').Router();

// Get all Categories
categoryController.get('/', async (req, res) => {

    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

// Details Category
categoryController.get('/:id', async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        res.json(category);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

// Create Category
categoryController.post('/create', hasUser(), isAdmin(), async (req, res) => {
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



// Edit Category
categoryController.put('/:id', hasUser(), isAdmin(), async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        await updateCategory(id, data);
        const updatedCategory = await getCategoryById(id);
        res.status(200).json(updatedCategory);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

// Load all recipes by category
categoryController.get('/all-category-recipes/:id', async (req, res) => {
    try {
        const recipesByCategory = await getRecipesByCategory(req.params.id);

        console.log('recipesByCategory' + recipesByCategory)
        res.json(recipesByCategory);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

//details category
categoryController.delete('/:id', async (req, res) => {//hasUser(), isAdmin(),
    const id = req.params.id;
    await deleteCategory(id)
    res.status(200).json('Category Deleted!')
});

module.exports = categoryController;