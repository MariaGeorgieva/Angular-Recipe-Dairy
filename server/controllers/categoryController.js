const { hasUser, isAdmin } = require('../middlewares/guards');
const { getAllCategories, createCategory, getCategoryById, updateCategory, deleteCategory } = require('../services/categoryService');
const { parseError } = require('../util/parser');

const categoryController = require('express').Router();


categoryController.get('/',  async (req, res) => {

    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

categoryController.post('/create', async (req, res) => { //hasUser(), isAdmin(),
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

categoryController.get('/:id', async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        res.json(category);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

categoryController.put('/:id', async (req, res) => {//hasUser(), isAdmin(),
    const id = req.params.id;
    const data = req.body;

    try {
        await updateCategory(id, data);
        const updatedCategory = await getCategoryById(id);
        console.log('updatedCategory: ' + updatedCategory.titleCategory);
        res.status(200).json(updatedCategory);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});


categoryController.delete('/:id', async (req, res) => {//hasUser(), isAdmin(),
    const id = req.params.id;
    await deleteCategory(id)
    res.status(200).json('Category Deleted!')
});

module.exports = categoryController;